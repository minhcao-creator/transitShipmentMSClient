// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { DraggableProvided } from "react-beautiful-dnd";
// import { cn } from "@/lib/utils";
// import { Button } from "./ui/button";
import {
  CalendarIcon,
  DotsHorizontalIcon,
  Pencil1Icon,
  StarIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
import { useBoard } from "@/context/BoardContext/BoardContext";
import { memo } from "react";
import { Trip } from "@/types/type";
import { format } from "date-fns";

type TripItemProps = {
  trip: Trip;
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
      <div className={`${isDragging ? "bg-[#FFC2C2]" : "bg-[#F8F8F8]"} p-2 drop-shadow-[1.5px_1.5px_1.5px_rgba(88,88,88,0.38)] rounded-sm text-xs flex flex-col gap-1`}>
        <div className="flex justify-between">
          <div
            className={`${trip.type === "outbound"
              ? "text-yellow-500 bg-yellow-50"
              : "text-[#17937E] border border-[#17937E]"
              } px-2 py-1 rounded-sm`}
          >
            {trip.type}
          </div>
          <span>{format(trip.plannedTime, "HH:mm")}</span>
          <button
            className="bg-[#2C2C2C] rounded-sm text-white px-2"
          >
            {trip.code}
          </button>
        </div>
        <div>
          <span className="font-semibold">{trip.name}</span>
        </div>
        <div>{trip.postOfficeList.toString()}</div>
      </div>
    </li>
  );
}

export default memo<TripItemProps>(TripItem);