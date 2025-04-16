"use client";

import { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";
import Column from "./ColumnRoute";
import { useBoard } from "@/context/RouteContext/RouteContext";
// import useWindowSize from "@/hooks/useWindowSize";

type BoardProps = {
  heightFull: boolean
};

export default function Board({ heightFull }: BoardProps) {
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
      // if (result.type === "COLUMN") {
      //   dispatch({ type: "MOVE_COLUMN", payload: { source, destination } });
      //   return;
      // }
      // // Reordering or moving trips
      // if (result.type === "TRIP") {
      //   dispatch({ type: "MOVE_TRIP", payload: { source, destination } });
      // }
    },
    []
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
            className="flex gap-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {boardState.ordered.map((key: any, index: any) => (
              <Column
                key={key}
                index={index}
                listTitle={boardState.columns[key].vehicle.vehicleRegistrationPlate}
                listOfTrips={boardState.columns[key].routeVisitsStations}
                heightFull={heightFull}
              />
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}