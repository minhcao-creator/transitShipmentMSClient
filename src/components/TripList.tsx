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
import { Trip } from "@/types/board";
import { useEffect, useState } from "react";

type TripListProps = {
  listTitle?: string;
  listId?: string;
  listType?: string;
  listOfTrips: Trip[];
  isDropDisabled?: boolean;
};

/**
 *
 * This component supports dropping items
 * It also renders a list of draggables
 *
 */

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
          <div className="flex items-center justify-center uppercase bg-cyan-800 text-xs font-semibold py-2.5 text-white rounded-t-sm">
            {listTitle}
          </div>
          <div className="rounded-b-sm bg-white p-2 max-h-[100dvh] overflow-y-auto">
            <InnerList
              listOfTrips={listOfTrips}
              dropProvided={dropProvided}
              title={listTitle}
            />
          </div>
        </div>
      )}
    </Droppable>
  );
}

type InnerListProps = {
  dropProvided: DroppableProvided;
  listOfTrips: Trip[];
  title?: string;
};

function InnerList({ title, listOfTrips, dropProvided }: InnerListProps) {
  return (
    <div ref={dropProvided.innerRef} className="grid grid-cols-1 gap-2.5">
      {listOfTrips.map((trip, index) => {
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
      {dropProvided.placeholder}
    </div>
  );
}