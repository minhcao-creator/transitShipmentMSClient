export type User = {
  id: string;
  username: string;
  lastname: string;
  firstname: string;
  phoneNumber: string;
  citizenId: string;
  email: string;
  driverLicenseNumber: string;
  driverClass: string;
  role: Role;
  station: Station;
}

export type Role = {
  id: string,
  name: string
}

export type Station = {
  id: string,
  name: string
}

export type UserAction =
  | { type: "SET_USERS"; payload: User[] }
  | { type: "ADD_USER"; payload: User }
  | { type: "EDIT_USER"; payload: User }
  | { type: "DELETE_USER"; payload: User }
