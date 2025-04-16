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
import TripItem from "./TripItemRoute";
// import { Button } from "./ui/button";
// import { PlusIcon } from "@radix-ui/react-icons";
// import CreateTaskForm from "./CreateTaskForm";
// import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";

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
          <button className={`w-full flex gap-1 items-center justify-center p-1 rounded-t-sm bg-gray-800 hover:bg-gray-600`}>
            {/* <span>{listTitle}</span> */}

            <PlusIcon className="text-white size-5" />

          </button>
          <div ref={dropProvided.innerRef} className={`rounded-b-sm bg-white p-2 transition-all duration-1000 ${heightFull ? 'h-[32rem]' : 'h-[13rem]'} overflow-y-auto`}>
            <InnerList
              listOfTrips={listOfTrips.slice(1)}
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