"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import RowPackage from './RowPackage'
import HeaderPackage from './HeaderPackage'
import { Order } from '@/types/orderStation'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import OrderEdit from '../modal/OrderEdit'
import { api } from '@/context/AuthContext/AuthContext'

type RowOrderProps = {
  order: Order,
  index: number
}

function RowOrder({ order, index }: RowOrderProps) {
  const [show, setShow] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { dispatch } = useOrder()
  const handleDeleteOrder = async () => {
    try {
      dispatch({ type: "DELETE_ORDER", payload: order })
      await api.delete(`orders/${order.id}`)
    } catch (error) {
      console.log(error)
    }
  }
  const parcels = order.parcels ? order.parcels.length : 0
  const items = order.parcels ? order.parcels.reduce((items, parcel) => items = items + (parcel.items ? parcel.items.length : 0), 0) : 0

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Processing":
        return "text-blue-500";
      case "Ready":
        return "text-green-500";
      case "Completed":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div>
      <div>
        <div className='flex flex-row item-center p-4 border-b border-gray-400 bg-white'>
          <span className='flex items-center basis-[4%] px-2 border-r border-gray-900'>
            {index}
          </span>
          <span className='flex items-center basis-[9%] px-2 border-r border-gray-900'>
            {order.id}
          </span>
          <span className='flex items-center basis-[10%] px-2 border-r border-gray-900'>
            {order.senderName}
          </span>
          <span className='flex items-center basis-[9%] px-2 border-r border-gray-900'>
            {order.senderPhoneNumber}
          </span>
          <span className='flex items-center basis-[10%] px-2 border-r border-gray-900'>
            {order.receiverName}
          </span>
          <span className='flex items-center basis-[9%] px-2 border-r border-gray-900'>
            {order.receiverPhoneNumber}
          </span>
          <span className='flex items-center basis-[22%] px-2 border-r border-gray-900 truncate hover:text-wrap'>
            {order.receiverAddress}
          </span>
          <span className='flex items-center basis-[8%] px-2 border-r border-gray-900'>
            <span className={`${getStatusColor(order.status?.name || '')} font-medium px-2`}>
              {order.status?.name}
            </span>
          </span>
          <span className='flex items-center basis-[5%] px-2 border-r border-gray-900'>
            {parcels}
          </span>
          <span className='flex items-center basis-[5%] px-2'>
            {items}
          </span>
          <button className='flex items-center basis-[3%] px-2 border-neutral-600 border-x hover:text-cyan-600' onClick={() => setShowModal(true)}>
            <Pencil1Icon />
          </button>
          <button className='flex items-center basis-[3%] px-2 border-neutral-600 border-r hover:text-rose-600' onClick={handleDeleteOrder}>
            <TrashIcon />
          </button>
          <button className='flex items-center basis-[3%] px-2 border-neutral-600 border-r'
            onClick={() => setShow(!show)}>
            <div className={`h-4 w-4 ${show ? "" : "transform -rotate-90"}`}>
              <DropdownIcon />
            </div>
          </button>
        </div>
        {show && (<div className='pl-8 pr-4 bg-white'>
          <HeaderPackage idOrder={order.id} showIdOrder={false} />
          <div className='max-h-[44dvh] overflow-y-auto'>
            {order.parcels?.map((parcel, index) => (
              <RowPackage idOrder={order.id} parcelData={parcel} key={parcel.id} index={index + 1} showIdOrder={false} />
            ))}
          </div>
        </div>)}
      </div>
      {showModal && (
        <OrderEdit order={order} setShowModal={() => setShowModal(false)} />
      )}
    </div>


  )
}

export default RowOrder