import { Station } from './orderLocal'
import { DraggableLocation } from "react-beautiful-dnd";

export type VehicleStatus = {
  id: string;
  name: string;
}

export type VehicleType = {
  id: string;
  name: string;
  width: number;
  height: number;
  depth: number;
  capacity: number;
}

export type Vehicle = {
  id: string;
  vehicleRegistrationPlate: string;
  longtitude: number;
  latitude: number;
  station: Station;
  status: VehicleStatus;
  type: VehicleType;
  show?: boolean;
}

export type Route = {
  id: string;
  startCode: string;
  endCode: string;
  startedAt: Date,
  endedAt: Date,
  ordinalNumber: number,
  vehicle: {
    id: string;
    vehicleRegistrationPlate: string;
  },
  plan: {
    id: string;
  },
  status: {
    id: string;
  },
  mission: {
    id: string;
  },
  routeVisitsStations: [
    {
      station: string,
      ordinalNumber: number,
      etd: Date;
      eta: Date;
      departuredAt: Date;
      arrivedAt: Date;
      flag: boolean;
    }
  ],
  drivers: [
    {
      id: string;
      username: string;
      lastname: string;
      firstname: string;
      phoneNumber: string;
      citizenId: string;
      email: string;
      driverLicenseNumber: string;
      driverClass: string;
    }
  ],
  transitOrders: [
    {
      id: string;
    }
  ]
}

export type RouteMap = {
  [key: string]: Route[];
}

export type Board = {
  columns: RouteMap;
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