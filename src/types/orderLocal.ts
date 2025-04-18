export type OrderStatus = {
  id: string,
  name: string
}

export type ParcelStatus = {
  id: string,
  name: string
}

export type ParcelTypes = {
  id: string,
  name: string
}

export type Item = {
  id: string;
  name: string;
  quantity: number;
  note: string;
}

export type Parcels = {
  id: string;
  weight: number;
  depth: number;
  height: number;
  width: number;
  note: string;
  type: ParcelTypes;
  status: ParcelStatus;
  items: Item[];
}

export type PostOfficeManager = {
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

export type Station = {
  id: string,
  name: string,
  openingTime: string,
  closingTime: string,
  address: string,
  longtitude: number,
  latitude: number,
  capacity: number
}

export type Order = {
  id: string;
  senderName: string;
  receiverName: string;
  receiverAddress: string;
  senderPhoneNumber: string;
  receiverPhoneNumber: string;
  message: string;
  status?: OrderStatus;
  parcels: Parcels[];
  postOfficeManager?: PostOfficeManager;
  departureStation?: Station;
}

export type AddParcel = {
  idOrder: string;
  parcelData: Parcels
}

type AddItem = {
  idParcel: string;
  item: Item
}

export type OrderAction =
  | { type: "SET_ORDERS"; payload: Order[] }
  | { type: "ADD_ORDER"; payload: Order }
  | { type: "EDIT_ORDER"; payload: Order }
  | { type: "DELETE_ORDER"; payload: Order }
  | { type: "ADD_PARCEL"; payload: AddParcel }
  | { type: "EDIT_PACKAGE"; payload: Parcels }
  | { type: "DELETE_PACKAGE"; payload: Parcels }
  | { type: "ADD_ITEM"; payload: AddItem }
  | { type: "EDIT_ITEM"; payload: Item }
  | { type: "DELETE_ITEM"; payload: Item }
