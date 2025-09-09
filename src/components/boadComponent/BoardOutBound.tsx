"use client";

import { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";
import Column from "./Column";
import { useBoard } from "@/context/RouteContext/RouteContextOutBound";
import { api } from "@/context/AuthContext/AuthContext";
import { Route, RouteMap } from "@/types/routes";


export default function Board() {
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
        dispatch({ type: "MOVE_TRIP", payload: { source, destination } });
        const route = boardStateTmp.columns[source.droppableId][source.index]
        const startCodeDes = () => {
          if (boardStateTmp.columns[destination.droppableId].length == 0) {
            return 0;
          }
          else if (destination.index == 0) {
            return parseInt(boardStateTmp.columns[destination.droppableId][destination.index].startCode) - 1;
          }
          else {
            return parseInt(boardStateTmp.columns[destination.droppableId][destination.index - 1].startCode) + 1;
          }
        }
        const lengDes = boardStateTmp.columns[destination.droppableId].length
        const run = async () => {
          let res: boolean = true

          if (destination.index !== 0) {
            for (let i = destination.index - 1; i < lengDes - 1; i++) {
              if (res) {
                if ((parseInt(boardStateTmp.columns[destination.droppableId][i + 1].startCode) - parseInt(boardStateTmp.columns[destination.droppableId][i].startCode)) > 1) {
                  console.log(parseInt(boardStateTmp.columns[destination.droppableId][i + 1].startCode), parseInt(boardStateTmp.columns[destination.droppableId][i].startCode))
                  i = lengDes
                }
                else {
                  const routeTmp = boardStateTmp.columns[destination.droppableId][i + 1]
                  console.log(boardStateTmp.columns[destination.droppableId][i], routeTmp.startCode, (parseInt(routeTmp.startCode) + 1).toString())
                  routeTmp.startCode = (parseInt(routeTmp.startCode) + 1).toString()
                  const response = await api.put('/routes', {
                    id: routeTmp.id,
                    startCode: routeTmp.startCode,
                    endCode: "endCode",
                    startedAt: routeTmp.startedAt,
                    endedAt: routeTmp.endedAt
                  })
                  res = await response.data && res
                }
              }
            }
          }
          return res
        }

        const res = await run()

        const res1 = await api.patch(`/routes/${route.id}/status/${destination.droppableId}/set`)
        const res2 = await api.put('/routes', {
          id: route.id,
          startCode: startCodeDes().toString(),
          endCode: "endCode",
          startedAt: route.startedAt,
          endedAt: route.endedAt
        })

        if (res && res1.data & res2.data) {
          const localBoardData = await api.get('/routes')
          const dataObject = transformData(localBoardData.data);
          console.log('dataObject', dataObject)
          dispatch({ type: "SET_TRIPS", payload: dataObject });
        }

      }

    } catch (error) {
      console.log(error)
    }
  }

  function transformData(routes: Route[]) {
    const allowedStatusIds = ["PREP_O", "READY_O", "INPROG_O", "DONE_O"];
    const routeMap: RouteMap = {};
    const ordered = [...allowedStatusIds];

    // Gom route theo statusId
    routes.forEach(route => {
      const statusId = route.status?.id;
      if (allowedStatusIds.includes(statusId)) {
        if (!routeMap[statusId]) {
          routeMap[statusId] = [];
        }
        routeMap[statusId].push(route);
      }
    });

    // Tạo sortedMap có đủ 4 keys, kể cả khi rỗng
    const sortedMap: RouteMap = {};

    allowedStatusIds.forEach(statusId => {
      const routesForStatus = routeMap[statusId] || [];
      sortedMap[statusId] = [...routesForStatus].sort((a, b) => {
        return parseInt(a.startCode) - parseInt(b.startCode);
      });
    });

    return { columns: sortedMap, ordered };
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
            className="grid grid-cols-4 gap-1"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {boardState.ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                listTitle={key}
                listOfTrips={boardState.columns[key]}
              />
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}