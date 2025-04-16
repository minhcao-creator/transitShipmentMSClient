"use client"

import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
// import { Card, CardContent, CardHeader } from "./ui/card";
import TripItem from "./TripItem";
// import { Button } from "./ui/button";
// import { PlusIcon } from "@radix-ui/react-icons";
// import CreateTaskForm from "./CreateTaskForm";
// import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Route } from "@/types/routes";

type TripListProps = {
  listTitle?: string;
  listId: string;
  listType?: string;
  listOfTrips: Route[];
  isDropDisabled?: boolean;
};

export default function TripList({
  listTitle,
  listOfTrips,
  isDropDisabled,
  listId = "LIST",
  listType,
}: TripListProps) {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowForm((open) => !open);
      }
      if (e.key === "Escape") {
        e.preventDefault();
        setShowForm(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const planTranslations = {
    PREP_O: "Dự kiến XUẤT HÀNG",
    READY_O: "SẴN SÀNG XUẤT HÀNG",
    INPROG_O: "ĐANG XUẤT HÀNG",
    DONE_O: "ĐÃ XUẤT HÀNG",
    PREP_I: "Dự kiến  NHẬP HÀNG",
    READY_I: "SẴN SÀNG NHẬP HÀNG",
    INPROG_I: "ĐANG NHẬP HÀNG",
    DONE_I: "ĐÃ NHẬP HÀNG",
  };

  const planColors = {
    PREP_O: "bg-[#006F62] text-white",
    READY_O: "bg-[#5C7B69] text-white",
    INPROG_O: "bg-[#9FBFA6] text-white",
    DONE_O: "bg-[#C8D7BD] text-gray-800",
    PREP_I: "bg-[#562E1C] text-white",
    READY_I: "bg-[#794004] text-white",
    INPROG_I: "bg-[#987266] text-white",
    DONE_I: "bg-[#C3B091] text-gray-800",
  };

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
          <div className={`tracking-wider flex items-center font-semibold justify-center uppercase text-sm py-3 rounded-t-sm ${planColors[listTitle] || "bg-gray-500"}`}>
            {planTranslations[listTitle]}
          </div>
          <div ref={dropProvided.innerRef} className="rounded-b-sm bg-white p-2 max-h-[83dvh] overflow-y-auto">
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
  listOfTrips: Route[];
  title?: string;
};

function InnerList({ title, listOfTrips }: InnerListProps) {
  return (
    <div className="grid grid-cols-1 gap-2.5">
      {listOfTrips?.map((trip, index) => {
        return (
          <Draggable key={trip.id} draggableId={trip.id} index={index}>
            {(
              dragProvided: DraggableProvided,
              dragSnapshot: DraggableStateSnapshot
            ) => (
              <TripItem
                key={trip.id}
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