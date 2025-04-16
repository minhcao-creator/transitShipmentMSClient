import { DraggableProvided } from "react-beautiful-dnd";
import { useBoard } from "@/context/BoardContext/BoardContext";
import { memo } from "react";
import { format } from "date-fns";
import { Route } from "@/types/routes";

type TripItemProps = {
  trip: Route;
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
      <div className={`${isDragging ? "bg-[#FFC2C2]" : "bg-[#F6F6F6]"} p-3 drop-shadow-[1.5px_1.5px_1.5px_rgba(88,88,88,0.52)] rounded-sm text-xs flex flex-col gap-1`}>
        <div className="flex justify-between items-center pb-1">
          <div
            className={`${trip.plan.id.endsWith('_I')
              ? "text-[#B8621B] border border-[#B8621B]"
              : "text-[#17937E] border border-[#17937E]"
              } px-2 py-1 rounded-sm`}
          >
            {trip.plan.id}
          </div>
          <div>
            <span>{trip.startedAt && format(trip.startedAt, "HH:mm")}</span>
          </div>
          <button
            className="bg-[#2C2C2C] rounded-sm text-white px-2 py-1"
          >
            {trip.vehicle?.vehicleRegistrationPlate}
          </button>
        </div>
        <div>
          {trip.routeVisitsStations.map((r: any) => (
            <span className="pr-4" key={r.station}>{r.station}</span>
          ))}
        </div>
        <div className="flex justify-between">
          <span>{trip.id}</span>
          <span>{trip.startCode}</span>
        </div>
      </div>
    </li >
  );
}

export default memo<TripItemProps>(TripItem);