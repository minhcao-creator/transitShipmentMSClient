"use client"

import React from 'react'
import RowOrder from './RowOrder'
import { useOrder } from '@/context/OrderContext/OrderContext'

export default function Row() {
  const { orderState } = useOrder();
  return (
    <div className='max-h-[78dvh] overflow-y-auto'>
      {orderState.map((order) => (
        <RowOrder order={order} key={order.id} />
      ))}
    </div>
  )
}