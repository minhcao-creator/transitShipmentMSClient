"use client"

import { orderInitialData } from "@/orderData"
import { Order, OrderAction } from "@/types/order"
import { createContext, PropsWithChildren, useContext, useEffect, useReducer, useState } from "react"

const initialData: Order[] = orderInitialData

const OrderContext = createContext({
  orderState: initialData,
  dispatch: (action: OrderAction) => { }
})

export const OrderProvider = ({ children }: PropsWithChildren) => {

  const [orderState, dispatch] = useReducer(
    orderReducer,
    initialData
  )
  useEffect(() => {
    loadData();
  }, [])

  function loadData() {
    const localOrderData = localStorage.getItem("@Order");

    if (localOrderData === null) {
      localStorage.setItem("@Order", JSON.stringify(initialData));
    } else {
      const dataObject = JSON.parse(localOrderData);
      dispatch({ type: "SET_ORDERS", payload: dataObject });
    }
    setLoading(false);
  }


  const [loading, setLoading] = useState<boolean>(false)

  if (loading) return;

  return (
    <OrderContext.Provider value={{ orderState, dispatch }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext);
}

function orderReducer(state: Order[], action: OrderAction): Order[] {
  switch (action.type) {
    case "SET_ORDERS": {
      return action.payload
    }

    case "DELETE_ORDER": {
      const idDel = action.payload.id
      var newState = [...state]

      newState = newState.filter(
        (order) => order.id !== idDel
      )

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    case "DELETE_PACKAGE": {
      const idDel = action.payload.id
      const newState = [...state]

      newState.forEach((order) => {
        order.packages = order.packages.filter(
          (packageData) => packageData.id !== idDel
        )
      })

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    case "DELETE_ITEM": {
      const idDel = action.payload.id
      const newState = [...state]
      newState.forEach((order) => {
        order.packages.forEach((packageData) => (
          packageData.items = packageData.items.filter(
            (item) => item.id !== idDel
          )
        ))
      })

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    case "EDIT_ITEM": {
      const idEdit = action.payload.id
      const newState = [...state]
      newState.forEach((order) => {
        order.packages.forEach((packageData) => (
          packageData.items.forEach((item) => {
            if (item.id === idEdit) {
              item.number = action.payload.number,
                item.note = action.payload.note
            }
          })
        ))
      })

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    case "EDIT_PACKAGE": {
      const idEdit = action.payload.id
      const newState = [...state]
      newState.forEach((order) => {
        order.packages.forEach((packageData) => {
          if (packageData.id === idEdit) {
            packageData.height = action.payload.height
            packageData.weight = action.payload.weight
            packageData.length = action.payload.length
            packageData.width = action.payload.width
            packageData.status = action.payload.status
            packageData.type = action.payload.type
            packageData.note = action.payload.note
          }
        })
      })

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    case "EDIT_ORDER": {
      const idEdit = action.payload.id
      const newState = [...state]
      newState.forEach((order) => {
        if ((order.id) === idEdit) {
          order.customer = action.payload.customer
          order.customerAddress = action.payload.customerAddress
          order.customerContact = action.payload.customerContact
          order.location = action.payload.location
          order.note = action.payload.note
          order.receiveAddress = action.payload.receiveAddress
          order.receiver = action.payload.receiver
          order.shop = action.payload.shop
          order.shopContact = action.payload.shopContact
          order.status = action.payload.status
        }
      })

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    case "ADD_ORDER": {
      const newState = [...state]

      const newOrder = {
        ...action.payload
      }

      newState.unshift(newOrder)

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    case "ADD_PACKAGE": {
      const newState = [...state]

      const idOrder = action.payload.idOrder
      const newPackage = {
        ...action.payload.packageData
      }

      newState.forEach((order) => {
        if ((order.id) === idOrder) {
          order.packages.unshift(newPackage)
        }
      })

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    case "ADD_ITEM": {
      const newState = [...state]

      const idPackage = action.payload.idPackage
      const newItem = {
        ...action.payload.item
      }

      newState.forEach((order) => {
        order.packages.forEach((packageData) => {
          if (packageData.id === idPackage) {
            packageData.items.unshift(newItem)
          }
        })
      })

      localStorage.setItem("@Order", JSON.stringify(newState));

      return newState
    }

    default:
      return initialData
  }
}
