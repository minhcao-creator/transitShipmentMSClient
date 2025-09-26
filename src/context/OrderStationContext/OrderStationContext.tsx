"use client"

import { State, OrderAction } from "@/types/orderStation"
import { createContext, PropsWithChildren, useContext, useEffect, useReducer, useState } from "react"
import { api, useAuth } from "../AuthContext/AuthContext"
import { startOfToday, format } from "date-fns"

const initialData: State = {
  orders: [],
  pageIndex: 1,
  pageParcelIndex: 1,
  pageItemIndex: 1,
  pageSize: 7,
  isFilter: false,
  titleFilter: undefined,
  nameFilter: '',
}

const OrderStationContext = createContext({
  orderState: initialData,
  dispatch: (action: OrderAction) => { }
})

export const OrderStationProvider = ({ children }: PropsWithChildren) => {
  //console.log('orderContex')
  const { authState } = useAuth();

  const [orderState, dispatch] = useReducer(
    orderReducer,
    initialData
  )

  useEffect(() => {
    if (!authState.isCheckAuth) return
    loadData()
  }, [authState.isCheckAuth])

  async function loadData() {
    try {
      const today = format(startOfToday(), "yyyy-MM-dd")
      const res = authState.user?.role == 'hub-manager' ? await api.get('orders') : await api.get(`orders/departure-stations/${authState.user?.station}?iso_string=${today}`)
      dispatch({ type: "SET_ORDERS", payload: res.data });
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }


  const [loading, setLoading] = useState<boolean>(false)

  if (loading) return;

  return (
    <OrderStationContext.Provider value={{ orderState, dispatch }}>
      {children}
    </OrderStationContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderStationContext);
}

function orderReducer(state: State, action: OrderAction): State {
  switch (action.type) {
    case "SET_ORDERS": {
      return {
        orders: action.payload,
        pageIndex: 1,
        pageParcelIndex: 1,
        pageItemIndex: 1,
        pageSize: 7,
        isFilter: false,
        titleFilter: undefined,
        nameFilter: ''
      }
    }

    case "IMPORT_EXCEL": {

      const newOrders = [...action.payload, ...state.orders]

      return {
        orders: newOrders,
        pageIndex: 1,
        pageParcelIndex: 1,
        pageItemIndex: 1,
        pageSize: 7,
        isFilter: false,
        titleFilter: undefined,
        nameFilter: ''
      }
    }

    case "SET_ORDERS_PAGINATION": {
      return {
        ...state,
        pageIndex: action.payload
      }
    }

    case "SET_PARCELS_PAGINATION": {
      return {
        ...state,
        pageParcelIndex: action.payload
      }
    }

    case "SET_ITEMS_PAGINATION": {
      return {
        ...state,
        pageItemIndex: action.payload
      }
    }

    case "SET_ORDERS_FILTER": {
      return {
        ...state,
        isFilter: true,
        titleFilter: action.payload.titleFilter,
        nameFilter: action.payload.nameFilter
      }
    }

    case "SET_ORDERS_NONFILTER": {
      return {
        ...state,
        isFilter: false
      }
    }

    case "DELETE_ORDER": {
      const idDel = action.payload.id
      var newOrders = [...state.orders]

      newOrders = newOrders.filter(
        (order) => order.id !== idDel
      )

      const newState = {
        ...state,
        orders: newOrders
      }

      return newState
    }

    // case "DELETE_PACKAGE": {
    //   const idDel = action.payload.id
    //   const newState = [...state]

    //   newState.forEach((order) => {
    //     order.packages = order.packages.filter(
    //       (packageData) => packageData.id !== idDel
    //     )
    //   })

    //   localStorage.setItem("@Order", JSON.stringify(newState));

    //   return newState
    // }

    // case "DELETE_ITEM": {
    //   const idDel = action.payload.id
    //   const newState = [...state]
    //   newState.forEach((order) => {
    //     order.packages.forEach((packageData) => (
    //       packageData.items = packageData.items.filter(
    //         (item) => item.id !== idDel
    //       )
    //     ))
    //   })

    //   localStorage.setItem("@Order", JSON.stringify(newState));

    //   return newState
    // }

    // case "EDIT_ITEM": {
    //   const idEdit = action.payload.id
    //   const newState = [...state]
    //   newState.forEach((order) => {
    //     order.packages.forEach((packageData) => (
    //       packageData.items.forEach((item) => {
    //         if (item.id === idEdit) {
    //           item.number = action.payload.number,
    //             item.note = action.payload.note
    //         }
    //       })
    //     ))
    //   })

    //   localStorage.setItem("@Order", JSON.stringify(newState));

    //   return newState
    // }

    // case "EDIT_PACKAGE": {
    //   const idEdit = action.payload.id
    //   const newState = [...state]
    //   newState.forEach((order) => {
    //     order.packages.forEach((packageData) => {
    //       if (packageData.id === idEdit) {
    //         packageData.height = action.payload.height
    //         packageData.weight = action.payload.weight
    //         packageData.length = action.payload.length
    //         packageData.width = action.payload.width
    //         packageData.status = action.payload.status
    //         packageData.type = action.payload.type
    //         packageData.note = action.payload.note
    //       }
    //     })
    //   })

    //   localStorage.setItem("@Order", JSON.stringify(newState));

    //   return newState
    // }

    case "EDIT_ORDER": {
      const idEdit = action.payload.id
      const newOrders = [...state.orders]
      newOrders.forEach((order) => {
        if ((order.id) === idEdit) {
          order.senderName = action.payload.senderName
          order.senderPhoneNumber = action.payload.senderPhoneNumber
          order.receiverName = action.payload.receiverName
          order.receiverAddress = action.payload.receiverAddress
          order.receiverPhoneNumber = action.payload.receiverPhoneNumber
          order.message = action.payload.message
        }
      })

      const newState = {
        ...state,
        orders: newOrders
      }

      return newState
    }

    case "ADD_ORDER": {

      const newOrders = [action.payload, ...state.orders]

      return {
        orders: newOrders,
        pageIndex: 1,
        pageParcelIndex: 1,
        pageItemIndex: 1,
        pageSize: 7,
        isFilter: false,
        titleFilter: undefined,
        nameFilter: ''
      }
    }

    case "ADD_PARCEL": {
      const newOrders = [...state.orders]

      const idOrder = action.payload.idOrder
      const newPackage = {
        ...action.payload.parcelData
      }

      newOrders.forEach((order) => {
        if ((order.id) === idOrder) {
          order.parcels.unshift(newPackage)
        }
      })

      return {
        ...state,
        orders: newOrders
      }
    }

    case "ADD_ITEM": {
      const newOrders = [...state.orders]

      const idPackage = action.payload.idParcel
      const newItem = {
        ...action.payload.item
      }

      newOrders.forEach((order) => {
        order.parcels.forEach((packageData) => {
          if (packageData.id === idPackage) {
            packageData.items.unshift(newItem)
          }
        })
      })

      return {
        ...state,
        orders: newOrders
      }
    }

    default:
      return initialData
  }
}
