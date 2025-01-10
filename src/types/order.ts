export type Item = {
  id: string;
  name: string;
  number: number;
  note: string;
}

export type Package = {
  id: string;
  weight: number;
  height: number;
  width: number;
  note: string;
  type: string;
  status: string;
  location: number[];
  items: Item[];
}

export type Order = {
  id: string;
  shop: string;
  customer: string;
  shopContact: string;
  customerContact: string;
  customerAddress: string;
  note: string;
  receiveAddress: string;
  receiver: string;
  location: number[];
  status: string;
  packages: Package[];
}

type AddOrder = {
  shop: string;
  customer: string;
  shopContact: string;
  customerContact: string;
  customerAddress: string;
  note: string;
  receiveAddress: string;
  receiver: string;
  location: number[];
  status: string;
  packages: Package[];
}

type AddPackage = {
  idOrder: string
  weight: number;
  height: number;
  width: number;
  note: string;
  type: string;
  status: string;
  location: number[];
  items: Item[];
}

type AddItem = {
  idPackage: string
  name: string;
  number: number;
  note: string;
}

export type OrderAction =
  | { type: "SET_ORDERS"; payload: Order[] }
  | { type: "ADD_ORDER"; payload: AddOrder }
  | { type: "EDIT_ORDER"; payload: Order }
  | { type: "DELETE_ORDER"; payload: Order }
  | { type: "ADD_PACKAGE"; payload: AddPackage }
  | { type: "EDIT_PACKAGE"; payload: Package }
  | { type: "DELETE_PACKAGE"; payload: Package }
  | { type: "ADD_ITEM"; payload: AddItem }
  | { type: "EDIT_ITEM"; payload: Item }
  | { type: "DELETE_ITEM"; payload: Item }
