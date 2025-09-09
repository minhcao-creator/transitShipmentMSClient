"use client"

import React from 'react'
import RowOrder from './RowOrder'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext';
import { Order } from '@/types/orderStation';

export default function Row() {
  const { orderState } = useOrder();
  const indexStart = (orderState.pageIndex - 1) * orderState.pageSize
  const indexEnd = orderState.pageIndex * orderState.pageSize
  const orders = orderState.orders.length > indexEnd ? orderState.orders.slice(indexStart, indexEnd) : orderState.orders.slice(indexStart)

  const handleFilter = () => {
    if (!orderState.isFilter) return orders
    const orderFilters = orders.filter((order: Order) => order[orderState.titleFilter].toLowerCase().includes(orderState.nameFilter.toLowerCase()))
    return orderFilters
  }

  return (
    <div className='h-[62dvh] overflow-y-auto'>
      {handleFilter().map((order, index) => (
        <RowOrder order={order} key={order.id} index={indexStart + index + 1} />
      ))}
    </div>
  )
}