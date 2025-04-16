/**
 * This component contains a Column e.g. Todo, In Progress, Complete, etc.
 */

import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import TripList from "./TripListRoute";

type ColumnProps = {
  listTitle: string;
  listOfTrips: any[];
  index: number;
  heightFull: boolean;
};

export default function Column({ index, listOfTrips, listTitle, heightFull }: ColumnProps) {
  return (
    <Draggable draggableId={listTitle} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TripList
            listId={listTitle}
            listType="TRIP"
            listOfTrips={listOfTrips}
            isDropDisabled={false}
            listTitle={listTitle}
            heightFull={heightFull}
          />
        </div>
      )}
    </Draggable>
  );
}