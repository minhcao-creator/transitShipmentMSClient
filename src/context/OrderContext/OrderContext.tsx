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
      return newState
    }

    default:
      return initialData
  }
}
