import { DraggableLocation } from "react-beautiful-dnd";

export type Trip = {
  id: string;
  name: string;
  postOfficeList: string[];
  code: string;
  type: string;
  plannedTime: string;
  readyTime: string;
  inProgressTime: string;
  completedTime: string;
}

export type TripMap = {
  [key: string]: Trip[];
}

export type Board = {
  columns: TripMap;
  ordered: string[];
}

export type BoardAction =
  | { type: "SET_TRIPS"; payload: Board }
  | { type: "MOVE_TRIP"; payload: OnDragPayload }
  | { type: "MOVE_COLUMN"; payload: OnDragPayload };

type OnDragPayload = {
  source: DraggableLocation;
  destination: DraggableLocation;
};