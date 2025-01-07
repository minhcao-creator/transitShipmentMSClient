"use client";

import { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";
import Column from "./Column";
import { useBoard } from "@/context/BoardContext/BoardContext";
// import useWindowSize from "@/hooks/useWindowSize";

export default function Board() {
  const { boardState, dispatch } = useBoard();
  // const { isMobile } = useWindowSize();

  // // using useCallback is optional
  // const onBeforeCapture = useCallback(() => {
  //   /*...*/
  // }, []);
  // const onBeforeDragStart = useCallback(() => {
  //   /*...*/
  // }, []);
  // const onDragStart = useCallback(() => {
  //   /*...*/
  // }, []);
  // const onDragUpdate = useCallback(() => {
  //   /*...*/
  // }, []);
  const onDragEnd = useCallback(
    (result: DropResult) => {
      // console.log(result);
      if (!result.destination) return; // dropped nowhere

      const source: DraggableLocation = result.source;
      const destination: DraggableLocation = result.destination;

      // Reordering column
      if (result.type === "COLUMN") {
        dispatch({ type: "MOVE_COLUMN", payload: { source, destination } });
        return;
      }
      // Reordering or moving trips
      if (result.type === "TRIP") {
        dispatch({ type: "MOVE_TRIP", payload: { source, destination } });
      }
    },
    [dispatch]
  );

  return (
    <DragDropContext
      // onBeforeCapture={onBeforeCapture}
      // onBeforeDragStart={onBeforeDragStart}
      // onDragStart={onDragStart}
      // onDragUpdate={onDragUpdate}
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