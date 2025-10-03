"use client"

import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import TripItem from "./TripItemRoute";
import { useEffect, useState } from "react";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { api } from "@/context/AuthContext/AuthContext";
import { Station } from "@/types/user";
import { useBoard } from "@/context/RouteContext/RouteContext";

type TripListProps = {
  listTitle?: string;
  listId: string;
  listType?: string;
  listOfTrips: any[];
  isDropDisabled?: boolean;
  heightFull: boolean;
};

export default function TripList({
  listTitle,
  listOfTrips,
  isDropDisabled,
  listId = "LIST",
  listType,
  heightFull
}: TripListProps) {

  const { boardState, dispatch } = useBoard()

  const [showModal, setShowModal] = useState(false)

  const [stations, setStations] = useState<Station[]>()

  const handleAddStation = async (stationId: string, ordinalNumber: number) => {
    try {

      dispatch({
        type: 'ADD_STATION', payload: {
          idColumn: listTitle || "",
          station: stationId,
          ordinalNumber: ordinalNumber,
          etd: new Date("2025-04-17T03:31:35.408Z"),
          eta: new Date("2025-04-17T03:31:35.408Z"),
          departuredAt: new Date("2025-04-17T03:31:35.408Z"),
          arrivedAt: new Date("2025-04-17T03:31:35.408Z"),
          flag: false,
        }
      })

      await api.patch(`/routes/${listTitle}/stations/${stationId}/add`, {
        ordinalNumber: ordinalNumber,
        etd: "2025-04-17T03:31:35.408Z",
        eta: "2025-04-17T03:31:35.408Z",
        departuredAt: "2025-04-17T03:31:35.408Z",
        arrivedAt: "2025-04-17T03:31:35.408Z",
        flag: false,
      })
    } catch (error) {
      console.log(error)
    }

  }

  const getStations = async () => {
    try {
      const usedStationIds = new Set(listOfTrips.map(trip => trip.station));
      usedStationIds.add('WAREHOUSE-001');
      const res = await api.get('/stations');
      const stations = res.data.filter((s: any) => !usedStationIds.has(s.id));
      setStations(stations)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteRoute = async (idRoute: string) => {
    try {
      const vehicleId = boardState.columns[idRoute].vehicle.id
      dispatch({ type: "DELETE_TRIP", payload: { idColumn: idRoute } })
      await api.delete(`routes/${idRoute}`)
      await api.patch(`/vehicles/${vehicleId}/status/VSAVAILABLE/set`)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getStations()
  }, [])

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      isDropDisabled={isDropDisabled}
    >
      {(
        dropProvided: DroppableProvided,
        dropSnapshot: DroppableStateSnapshot
      ) => (
        <div {...dropProvided.droppableProps}>
          <div className="flex gap-0.5">
            <button
              className={`relative w-full flex gap-1 items-center justify-center p-1 rounded-t-sm bg-gray-800 hover:bg-gray-600`}
              onClick={() => setShowModal(!showModal)}
            >
              <PlusIcon className="text-white size-5" />
              {showModal && <div className='absolute left-16 top-0 z-40 flex flex-col items-start gap-2 p-2 w-[24rem] h-[15rem] overflow-auto bg-gray-300 rounded'>
                {stations?.map((s, i) => (
                  <button
                    key={i}
                    className="text-sm bg-gray-50 hover:bg-gray-200 p-1 w-full flex flex-col items-start rounded"
                    onClick={() => {
                      handleAddStation(s.id, (listOfTrips.length == 0 ? 1 : listOfTrips[listOfTrips.length - 1].ordinalNumber + 1))
                    }}
                  >
                    <span>{s.id}</span>
                    <span>{s.name}</span>
                  </button>
                ))}
              </div>}
            </button>
            <button
              className={`relative w-full flex gap-1 items-center justify-center p-1 rounded-t-sm bg-rose-800 hover:bg-rose-600`}
              onClick={() => deleteRoute(listTitle || "")}
            >
              <TrashIcon className="text-white size-5" />
            </button>
          </div>

          <div ref={dropProvided.innerRef} className={`rounded-b-sm bg-white p-2 transition-all duration-1000 ${heightFull ? 'h-[32rem]' : 'h-[13rem]'} overflow-y-auto`}>
            <InnerList
              listOfTrips={listOfTrips}
              dropProvided={dropProvided}
              title={listTitle}
            />
            {dropProvided.placeholder}
          </div>
        </div>
      )
      }
    </Droppable >
  );
}

type InnerListProps = {
  dropProvided: DroppableProvided;
  listOfTrips: any[];
  title?: string;
};

function InnerList({ title, listOfTrips }: InnerListProps) {
  return (
    <div className="grid grid-cols-1 gap-2.5">
      {listOfTrips?.map((trip, index) => {
        return (
          <Draggable key={title + trip.station} draggableId={title + trip.station} index={index}>
            {(
              dragProvided: DraggableProvided,
              dragSnapshot: DraggableStateSnapshot
            ) => (
              <TripItem
                key={title + trip.station}
                idColumn={title || ""}
                trip={trip}
                provided={dragProvided}
                isDragging={dragSnapshot.isDragging}
              />
            )}
          </Draggable>
        );
      })}
    </div>
  );
}