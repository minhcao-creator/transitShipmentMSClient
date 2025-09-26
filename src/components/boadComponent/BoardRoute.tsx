"use client";

import {
  DragDropContext,
  Droppable,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";
import Column from "./ColumnRoute";
import { useBoard } from "@/context/RouteContext/RouteContext";
import { api } from "@/context/AuthContext/AuthContext";
import { Route, RouteMap, Board } from "@/types/routeInit"

type BoardProps = {
  heightFull: boolean
};

export default function BoardRoute({ heightFull }: BoardProps) {
  const { boardState, dispatch } = useBoard();

  const onDragEnd = async (result: DropResult) => {
    try {
      if (!result.destination) return;

      const source: DraggableLocation = result.source;
      const destination: DraggableLocation = result.destination;

      // Reordering column
      if (result.type === "COLUMN") {
        dispatch({ type: "MOVE_COLUMN", payload: { source, destination } });
        return;
      }

      // Reordering or moving trips
      if (result.type === "TRIP") {
        const boardStateTmp = { ...boardState }
        dispatch({ type: "MOVE_STATION", payload: { source, destination } });
        const station = boardStateTmp.columns[source.droppableId].routeVisitsStations[source.index + 1]
        const ordinalNumberDes = () => boardStateTmp.columns[destination.droppableId].routeVisitsStations[destination.index].ordinalNumber + 1;

        const lengDes = boardStateTmp.columns[destination.droppableId].routeVisitsStations.length
        const run = async () => {
          let res: boolean = true
          for (let i = destination.index; i < lengDes - 1; i++) {
            if (res) {
              if ((boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1].ordinalNumber - boardStateTmp.columns[destination.droppableId].routeVisitsStations[i].ordinalNumber) > 1) {
                i = lengDes
              }
              else {
                const stationTmp = boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1]
                stationTmp.ordinalNumber = stationTmp.ordinalNumber + 1
                const response = await api.patch(`/routes/${destination.droppableId}/stations/${stationTmp.station}/update`, {
                  ordinalNumber: stationTmp.ordinalNumber,
                  etd: stationTmp.etd,
                  eta: stationTmp.eta,
                  departuredAt: stationTmp.departuredAt,
                  arrivedAt: stationTmp.arrivedAt,
                  flag: stationTmp.flag
                })
                res = await response.data && res
              }
            }
          }
          return res
        }

        const res = await run()

        const update = destination.droppableId == source.droppableId

        if (!update) {
          await api.patch(`/routes/${source.droppableId}/stations/${station.station}/remove`, {
            ...station
          })
        }

        const res2 = await api.patch(`/routes/${destination.droppableId}/stations/${station.station}/${update ? 'update' : 'add'}`, {
          ordinalNumber: ordinalNumberDes(),
          etd: station.etd,
          eta: station.eta,
          departuredAt: station.departuredAt,
          arrivedAt: station.arrivedAt,
          flag: station.flag
        })

        if (res && res2.data) {
          const localBoardData = await api.get('/routes')
          const dataObject = transformData(localBoardData.data);
          dispatch({ type: "SET_TRIPS", payload: dataObject });
        }

      }

    } catch (error) {
      console.log(error)
    }


  }

  function transformData(routes: Route[]): Board {
    const filteredRoutes = routes
      .filter(route => route.status?.id === 'INIT')
      .map(route => ({
        ...route,
        routeVisitsStations: [...route.routeVisitsStations].sort(
          (a, b) => a.ordinalNumber - b.ordinalNumber
        ),
      }));

    const columns: RouteMap = {};
    const ordered: string[] = [];

    for (const route of filteredRoutes) {
      columns[route.id] = route;
      ordered.push(route.id);
    }

    return {
      columns,
      ordered,
    };
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable
        droppableId="dashboard"
        type="COLUMN"
        direction={"horizontal"}
      >
        {(provided, snapshot) => (
          <ul
            className="flex gap-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {boardState.ordered.map((key: any, index: any) => (
              <Column
                key={key}
                index={index}
                listTitle={key}
                listOfTrips={boardState.columns[key].routeVisitsStations.slice(1)}
                heightFull={heightFull}
              />
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}