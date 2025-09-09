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
  stationId?: string;
  weight: number;
  senderName: string;
  receiverName: string;
  receiverAddress: string;
  senderPhoneNumber: string;
  receiverPhoneNumber: string;
  message: string;
  status?: OrderStatus;
  parcels: Parcels[];
  postOfficeManager?: PostOfficeManager;
  currentStation?: Station;
  departureStation?: Station;
  createdAt: string;
}

export type State = {
  orders: Order[];
  pageIndex: number;
  pageParcelIndex: number;
  pageItemIndex: number;
  pageSize: number;
  isFilter: boolean;
  titleFilter: keyof Order | undefined;
  nameFilter: string;
};

export type StateParcel = {
  parcels: Parcels[];
  pageIndex: number;
  pageSize: number;
  isFilter: boolean;
  titleFilter: keyof Parcels | undefined;
  nameFilter: string;
};

export type StateItem = {
  items: Item[];
  pageIndex: number;
  pageSize: number;
  isFilter: boolean;
  titleFilter: keyof Item | undefined;
  nameFilter: string;
};

export type AddParcel = {
  idOrder: string;
  parcelData: Parcels
}

type AddItem = {
  idParcel: string;
  item: Item
}

type FilterType = {
  titleFilter: keyof Order | keyof Parcels | keyof Item | undefined;
  nameFilter: string;
}

export type OrderAction =
  | { type: "SET_ORDERS"; payload: Order[] }
  | { type: "IMPORT_EXCEL"; payload: Order[] }
  | { type: "SET_ORDERS_PAGINATION"; payload: number }
  | { type: "SET_PARCELS_PAGINATION"; payload: number }
  | { type: "SET_ITEMS_PAGINATION"; payload: number }
  | { type: "SET_ORDERS_FILTER"; payload: FilterType }
  | { type: "SET_ORDERS_NONFILTER" }
  | { type: "ADD_ORDER"; payload: Order }
  | { type: "EDIT_ORDER"; payload: Order }
  | { type: "DELETE_ORDER"; payload: Order }
  | { type: "ADD_PARCEL"; payload: AddParcel }
  | { type: "EDIT_PACKAGE"; payload: Parcels }
  | { type: "DELETE_PACKAGE"; payload: Parcels }
  | { type: "ADD_ITEM"; payload: AddItem }
  | { type: "EDIT_ITEM"; payload: Item }
  | { type: "DELETE_ITEM"; payload: Item }
