import { DraggableProvided } from "react-beautiful-dnd";
import {
  Cross2Icon,
} from "@radix-ui/react-icons";
import { useBoard } from "@/context/RouteContext/RouteContext";
import { memo } from "react";
import { api } from "@/context/AuthContext/AuthContext";

type TripItemProps = {
  trip: any;
  isDragging: boolean;
  provided: DraggableProvided;
  idColumn: string;
};

function TripItem({ isDragging, provided, trip, idColumn }: TripItemProps) {
  const { dispatch } = useBoard();

  const handleDeleteStation = async () => {
    try {
      await api.patch(`/routes/${idColumn}/stations/${trip.station}/remove`, {
        ordinalNumber: trip.ordinalNumber.toString(),
        etd: trip.etd,
        eta: trip.eta,
        departuredAt: trip.departuredAt,
        arrivedAt: trip.arrivedAt
      })
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className={`${isDragging ? "bg-[#FFC2C2]" : "bg-[#F4F4F4]"} p-1 drop-shadow-[1.5px_1.5px_1.5px_rgba(88,88,88,0.62)] rounded-sm text-xs flex items-center justify-between gap-2`}>
        <span>{trip.station}</span>
        <button className="p-1" onClick={() => {
          handleDeleteStation()
          dispatch({ type: "DELETE_STATION", payload: { idColumn: idColumn, station: trip.station } })
        }}>
          <Cross2Icon className="text-rose-600" />
        </button>
      </div>
    </li >
  );
}

export default memo<TripItemProps>(TripItem);