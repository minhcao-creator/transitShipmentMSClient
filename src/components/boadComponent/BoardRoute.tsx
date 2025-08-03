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

type BoardProps = {
  heightFull: boolean
};

export default function Board({ heightFull }: BoardProps) {
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

        const station = boardStateTmp.columns[source.droppableId].routeVisitsStations[source.index + 1];

        if (source.droppableId == destination.droppableId) {

          const destinationId = destination.droppableId

          if (source.index > destination.index) {

            const stationPre = boardStateTmp.columns[destinationId].routeVisitsStations[destination.index];

            for (let i = source.index + 1; i < destination.index; i++) {
              if ((boardStateTmp.columns[destinationId].routeVisitsStations[i + 1].ordinalNumber - boardStateTmp.columns[destinationId].routeVisitsStations[i].ordinalNumber) > 1) {
                i = source.index + 1
              }
              else {
                const stationTmp = boardStateTmp.columns[destinationId].routeVisitsStations[i + 1]
                stationTmp.ordinalNumber = stationTmp.ordinalNumber + 1
                await api.patch(`/routes/${destinationId}/stations/${stationTmp.station}/update`, {
                  ordinalNumber: stationTmp.ordinalNumber,
                  etd: stationTmp.etd,
                  eta: stationTmp.eta,
                  departuredAt: stationTmp.departuredAt,
                  arrivedAt: stationTmp.arrivedAt,
                })
              }

            }

            await api.patch(`/routes/${destinationId}/stations/${station.station}/update`, {
              ordinalNumber: stationPre.ordinalNumber + 1,
              etd: station.etd,
              eta: station.eta,
              departuredAt: station.departuredAt,
              arrivedAt: station.arrivedAt,
            })

          }

        }

        // const station = boardStateTmp.columns[source.droppableId].routeVisitsStations[source.index + 1];

        // await api.patch(`/routes/${source.droppableId}/stations/${station.station}/remove`, {
        //   ordinalNumber: station.ordinalNumber,
        //   etd: station.etd,
        //   eta: station.eta,
        //   departuredAt: station.departuredAt,
        //   arrivedAt: station.arrivedAt,
        // })

        // const ordinalNumberDes = boardStateTmp.columns[destination.droppableId].routeVisitsStations[destination.index - 1].ordinalNumber + 1;

        // if (source.droppableId == destination.droppableId) {

        //   const run = async () => {

        //     let res: boolean = true

        //     const stationTmp = boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1]
        //     console.log(boardStateTmp.columns[destination.droppableId].routeVisitsStations[i], stationTmp.ordinalNumber, (stationTmp.ordinalNumber + 1))
        //     stationTmp.ordinalNumber = stationTmp.ordinalNumber + 1
        //     const response = await api.patch(`/routes/${destination.droppableId}/stations/${station.station}/update`, {
        //       ordinalNumber: stationTmp.ordinalNumber,
        //       etd: station.etd,
        //       eta: station.eta,
        //       departuredAt: station.departuredAt,
        //       arrivedAt: station.arrivedAt,
        //     })

        //     for (let i = destination.index; i < source.index + 1; i++) {
        //       if (res) {
        //         if ((boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1].ordinalNumber - boardStateTmp.columns[destination.droppableId].routeVisitsStations[i].ordinalNumber) > 1) {
        //           console.log(boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1].ordinalNumber, boardStateTmp.columns[destination.droppableId].routeVisitsStations[i].ordinalNumber)
        //           i = source.index + 1
        //         }
        //         else {
        //           const stationTmp = boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1]
        //           console.log(boardStateTmp.columns[destination.droppableId].routeVisitsStations[i], stationTmp.ordinalNumber, (stationTmp.ordinalNumber + 1))
        //           stationTmp.ordinalNumber = stationTmp.ordinalNumber + 1
        //           const response = await api.patch(`/routes/${destination.droppableId}/stations/${station.station}/update`, {
        //             ordinalNumber: stationTmp.ordinalNumber,
        //             etd: station.etd,
        //             eta: station.eta,
        //             departuredAt: station.departuredAt,
        //             arrivedAt: station.arrivedAt,
        //           })
        //           res = await response.data && res
        //         }
        //       }
        //     }
        //     return res
        //   }
        // }


        // const lengDes = boardStateTmp.columns[destination.droppableId].routeVisitsStations.length

        // const run = async () => {

        //   let res: boolean = true

        //   for (let i = destination.index; i < lengDes; i++) {
        //     if (res) {
        //       if ((boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1].ordinalNumber - boardStateTmp.columns[destination.droppableId].routeVisitsStations[i].ordinalNumber) > 1) {
        //         console.log(boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1].ordinalNumber, boardStateTmp.columns[destination.droppableId].routeVisitsStations[i].ordinalNumber)
        //         i = lengDes
        //       }
        //       else {
        //         const stationTmp = boardStateTmp.columns[destination.droppableId].routeVisitsStations[i + 1]
        //         console.log(boardStateTmp.columns[destination.droppableId].routeVisitsStations[i], stationTmp.ordinalNumber, (stationTmp.ordinalNumber + 1))
        //         stationTmp.ordinalNumber = stationTmp.ordinalNumber + 1
        //         const response = await api.patch(`/routes/${destination.droppableId}/stations/${station.station}/update`, {
        //           ordinalNumber: stationTmp.ordinalNumber,
        //           etd: station.etd,
        //           eta: station.eta,
        //           departuredAt: station.departuredAt,
        //           arrivedAt: station.arrivedAt,
        //         })
        //         res = await response.data && res
        //       }
        //     }
        //   }
        //   return res
        // }

        // const res = await run()

        // const res1 = await api.patch(`/routes/${route.id}/plan/${destination.droppableId}/set`)
        // const res2 = await api.put('/routes', {
        //   id: route.id,
        //   startCode: startCodeDes().toString(),
        //   endCode: "endCode",
        //   startedAt: route.startedAt,
        //   endedAt: route.endedAt
        // })

        // if (res && res1.data & res2.data) {
        //   const localBoardData = await api.get('/routes')
        //   const dataObject = transformData(localBoardData.data);
        //   console.log('dataObject', dataObject)
        //   dispatch({ type: "SET_TRIPS", payload: dataObject });
        // }
      }
    } catch (error) {
      console.log(error)
    }


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