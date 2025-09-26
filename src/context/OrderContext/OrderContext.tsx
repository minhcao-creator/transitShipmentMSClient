// "use client"

// import { Order, OrderAction } from "@/types/orderLocal"
// import { createContext, PropsWithChildren, useContext, useEffect, useReducer, useState } from "react"
// import { api, useAuth } from "../AuthContext/AuthContext"

// const initialData: Order[] = []

// const OrderContext = createContext({
//   orderState: initialData,
//   dispatch: (action: OrderAction) => { }
// })

// export const OrderProvider = ({ children }: PropsWithChildren) => {
//   const { authState } = useAuth();

//   const [orderState, dispatch] = useReducer(
//     orderReducer,
//     initialData
//   )

//   useEffect(() => {
//     if (!authState.isCheckAuth) return
//     loadData()
//   }, [authState.isCheckAuth])

//   async function loadData() {
//     //console.log('Order Context')
//     try {
//       const res = await api.get('/orders')
//       dispatch({ type: "SET_ORDERS", payload: res.data });
//       setLoading(false);
//     } catch (error) {
//       console.log
//     }
//   }


//   const [loading, setLoading] = useState<boolean>(false)

//   if (loading) return;

//   return (
//     <OrderContext.Provider value={{ orderState, dispatch }}>
//       {children}
//     </OrderContext.Provider>
//   )
// }

// export function useOrder() {
//   return useContext(OrderContext);
// }

// function orderReducer(state: Order[], action: OrderAction): Order[] {
//   switch (action.type) {
//     case "SET_ORDERS": {
//       return action.payload
//     }

//     // case "DELETE_ORDER": {
//     //   const idDel = action.payload.id
//     //   var newState = [...state]

//     //   newState = newState.filter(
//     //     (order) => order.id !== idDel
//     //   )

//     //   localStorage.setItem("@Order", JSON.stringify(newState));

//     //   return newState
//     // }

//     // case "DELETE_PACKAGE": {
//     //   const idDel = action.payload.id
//     //   const newState = [...state]

//     //   newState.forEach((order) => {
//     //     order.packages = order.packages.filter(
//     //       (packageData) => packageData.id !== idDel
//     //     )
//     //   })

//     //   localStorage.setItem("@Order", JSON.stringify(newState));

//     //   return newState
//     // }

//     // case "DELETE_ITEM": {
//     //   const idDel = action.payload.id
//     //   const newState = [...state]
//     //   newState.forEach((order) => {
//     //     order.packages.forEach((packageData) => (
//     //       packageData.items = packageData.items.filter(
//     //         (item) => item.id !== idDel
//     //       )
//     //     ))
//     //   })

//     //   localStorage.setItem("@Order", JSON.stringify(newState));

//     //   return newState
//     // }

//     // case "EDIT_ITEM": {
//     //   const idEdit = action.payload.id
//     //   const newState = [...state]
//     //   newState.forEach((order) => {
//     //     order.packages.forEach((packageData) => (
//     //       packageData.items.forEach((item) => {
//     //         if (item.id === idEdit) {
//     //           item.number = action.payload.number,
//     //             item.note = action.payload.note
//     //         }
//     //       })
//     //     ))
//     //   })

//     //   localStorage.setItem("@Order", JSON.stringify(newState));

//     //   return newState
//     // }

//     // case "EDIT_PACKAGE": {
//     //   const idEdit = action.payload.id
//     //   const newState = [...state]
//     //   newState.forEach((order) => {
//     //     order.packages.forEach((packageData) => {
//     //       if (packageData.id === idEdit) {
//     //         packageData.height = action.payload.height
//     //         packageData.weight = action.payload.weight
//     //         packageData.length = action.payload.length
//     //         packageData.width = action.payload.width
//     //         packageData.status = action.payload.status
//     //         packageData.type = action.payload.type
//     //         packageData.note = action.payload.note
//     //       }
//     //     })
//     //   })

//     //   localStorage.setItem("@Order", JSON.stringify(newState));

//     //   return newState
//     // }

//     // case "EDIT_ORDER": {
//     //   const idEdit = action.payload.id
//     //   const newState = [...state]
//     //   newState.forEach((order) => {
//     //     if ((order.id) === idEdit) {
//     //       order.customer = action.payload.customer
//     //       order.customerAddress = action.payload.customerAddress
//     //       order.customerContact = action.payload.customerContact
//     //       order.location = action.payload.location
//     //       order.note = action.payload.note
//     //       order.receiveAddress = action.payload.receiveAddress
//     //       order.receiver = action.payload.receiver
//     //       order.shop = action.payload.shop
//     //       order.shopContact = action.payload.shopContact
//     //       order.status = action.payload.status
//     //     }
//     //   })

//     //   localStorage.setItem("@Order", JSON.stringify(newState));

//     //   return newState
//     // }

//     case "ADD_ORDER": {

//       const newState = [...state, action.payload]

//       return newState
//     }

//     case "ADD_PARCEL": {
//       const newState = [...state]

//       const idOrder = action.payload.idOrder
//       const newPackage = {
//         ...action.payload.parcelData
//       }

//       newState.forEach((order) => {
//         if ((order.id) === idOrder) {
//           order.parcels.unshift(newPackage)
//         }
//       })
//       return newState
//     }

//     case "ADD_ITEM": {
//       const newState = [...state]

//       const idPackage = action.payload.idParcel
//       const newItem = {
//         ...action.payload.item
//       }

//       newState.forEach((order) => {
//         order.parcels.forEach((packageData) => {
//           if (packageData.id === idPackage) {
//             packageData.items.unshift(newItem)
//           }
//         })
//       })

//       return newState
//     }

//     default:
//       return initialData
//   }
// }
