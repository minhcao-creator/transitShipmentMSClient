"use client"

import React from 'react'
import RowOrder from './RowOrder'
import { useOrder } from '@/context/OrderContext/OrderContext'

export default function Row() {
  const { orderState } = useOrder();

  console.log(orderState)
  const token = localStorage.getItem('token')
  const decoded: any = token ? JSON.parse(atob(token.split(".")[1])) : null
  const userId = decoded.sub

  const newOrderState = orderState.filter((order) => order.postOfficeManager?.id === userId)
  return (
    <div className='max-h-[70dvh] overflow-y-auto'>
      {newOrderState.map((order) => (
        <RowOrder order={order} key={order.id} />
      ))}
    </div>
  )
}