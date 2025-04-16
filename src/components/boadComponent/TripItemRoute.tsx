import { DraggableProvided } from "react-beautiful-dnd";
import {
  Cross2Icon,
} from "@radix-ui/react-icons";
import { useBoard } from "@/context/BoardContext/BoardContext";
import { memo } from "react";

type TripItemProps = {
  trip: any;
  isDragging: boolean;
  provided: DraggableProvided;
};

function TripItem({ isDragging, provided, trip }: TripItemProps) {
  const { dispatch } = useBoard();
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className={`${isDragging ? "bg-[#FFC2C2]" : "bg-[#F4F4F4]"} p-1 drop-shadow-[1.5px_1.5px_1.5px_rgba(88,88,88,0.62)] rounded-sm text-xs flex items-center justify-between gap-2`}>
        <span>{trip.station}</span>
        <button className="p-1">
          <Cross2Icon className="text-rose-600" />
        </button>
      </div>
    </li >
  );
}

export default memo<TripItemProps>(TripItem);