import { DraggableProvided } from "react-beautiful-dnd";
import { useBoard } from "@/context/BoardContext/BoardContext";
import { memo, useState } from "react";
import { format } from "date-fns";
import { Route } from "@/types/routes";
import RouteInfomation from "../modal/RouteInfomation";

type TripItemProps = {
  trip: Route;
  isDragging: boolean;
  provided: DraggableProvided;
};

function TripItem({ isDragging, provided, trip }: TripItemProps) {
  const { dispatch } = useBoard();
  const [showModal, setShowModal] = useState<boolean>(false)

  const missionConfig: Record<
    string,
    { label: string; className: string }
  > = {
    START: {
      label: "Bắt đầu",
      className: "bg-[#E8F5E9] text-[#1B5E20]",
    },
    GET_VEHICLE: {
      label: "Lấy xe",
      className: "bg-[#E3F2FD] text-[#0D47A1]",
    },
    LOAD_GOODS: {
      label: "Xuất hàng",
      className: "bg-[#E0F2F1] text-[#00695C]",
    },
    EXIT_GATE: {
      label: "Ra cổng",
      className: "bg-[#FFF8E1] text-[#F57F17]",
    },
    MOVE: {
      label: "Di chuyển",
      className: "bg-gray-300 text-[#424242]",
    },
    ENTER_GATE: {
      label: "Vào cổng",
      className: "bg-[#FFF3E0] text-[#E65100]",
    },
    UNLOAD_GOODS: {
      label: "Nhập hàng",
      className: "bg-[#FFEBEE] text-[#B71C1C]",
    },
    RETURN_VEHICLE: {
      label: "Trả xe",
      className: "bg-[#F3E5F5] text-[#4A148C]",
    },
    END: {
      label: "Kết thúc",
      className: "bg-[#FCE4EC] text-[#880E4F]",
    },
  };

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className={`${isDragging ? "bg-[#FFC2C2]" : "bg-[#F6F6F6]"} p-3 drop-shadow-[1.5px_1.5px_1.5px_rgba(88,88,88,0.52)] rounded-sm text-sm flex flex-col gap-2`}>
        <div className="flex justify-between items-center pb-1">
          <div
            className={`${trip.status.id.endsWith('_I')
              ? "text-[#B8621B] border border-[#B8621B]"
              : "text-[#17937E] border border-[#17937E]"
              } px-2 py-1 rounded-sm`}
          >
            {trip.status.id}
          </div>

          <div>
            <span>{trip.startedAt && format(trip.startedAt, "HH:mm")}</span>
          </div>
        </div>
        <div>
          <button
            className="bg-[#2C2C2C] rounded-sm text-white px-2 py-1"
            onClick={() => setShowModal(true)}
          >
            {trip.id}
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          {trip.routeVisitsStations.map((r: any) => (
            <span
              key={r.station}
              className={`rounded-full text-sm font-medium ${r.flag
                ? "text-gray-900"
                : "text-gray-400"
                }`}
            >
              {r.station}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span>{trip.vehicle?.vehicleRegistrationPlate}</span>
          {/* <span>{trip.ordinalNumber}</span> */}
          <span
            className={`${missionConfig[trip.mission.id].className} px-2 py-1 rounded-sm text-sm font-medium`}
          >
            {missionConfig[trip.mission.id].label}
          </span>
        </div>
      </div>
      {showModal && <RouteInfomation trip={trip} setShowModal={() => setShowModal(false)} />}
    </div >
  );
}

export default memo<TripItemProps>(TripItem);