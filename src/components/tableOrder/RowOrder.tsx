"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import RowPackage from './RowPackage'
import HeaderPackage from './HeaderPackage'
import { Order } from '@/types/orderLocal'
import { useOrder } from '@/context/OrderContext/OrderContext'
import OrderEdit from '../modal/OrderEdit'

type RowOrderProps = {
  order: Order
}

function RowOrder({ order }: RowOrderProps) {
  const [show, setShow] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { dispatch } = useOrder()
  const handleDeleteOrder = () => {
    // dispatch({ type: "DELETE_ORDER", payload: order })
  }
  const parcels = order.parcels ? order.parcels.length : 0
  const items = order.parcels ? order.parcels.reduce((items, parcel) => items = items + (parcel.items ? parcel.items.length : 0), 0) : 0

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-600";
      case "Shipped":
        return "text-blue-600";
      case "Delivered":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div>
      <div>
        <div className='flex flex-row item-center p-4 border-b border-blue-gray-100 bg-white'>
          <span className='basis-[10%] px-1'>
            <button className='bg-[#2C2C2C] rounded-sm text-white px-1'>
              {order.id}
            </button>
          </span>
          <span className='basis-[10%] px-1'>
            {order.senderName}
          </span>
          <span className='basis-[10%] px-1'>
            {order.senderPhoneNumber}
          </span>
          <span className='basis-[10%] px-1'>
            {order.receiverName}
          </span>
          <span className='basis-[10%] px-1'>
            {order.receiverPhoneNumber}
          </span>
          <span className='basis-[21%] px-1 truncate hover:text-wrap'>
            {order.receiverAddress}
          </span>
          <span className={`basis-[8%] px-1 ${getStatusColor(order.status?.name || '')}`}>
            {order.status?.name}
          </span>
          <span className='basis-[6%] px-1'>
            {parcels}
          </span>
          <span className='basis-[6%] px-1'>
            {items}
          </span>
          <button className='basis-[3%] px-1 border-neutral-600 border-x hover:text-cyan-600' onClick={() => setShowModal(true)}>
            <Pencil1Icon />
          </button>
          <button className='basis-[3%] px-1 border-neutral-600 border-r hover:text-rose-600' onClick={handleDeleteOrder}>
            <TrashIcon />
          </button>
          <button className='basis-[3%] px-1 border-neutral-600 border-r'
            onClick={() => setShow(!show)}>
            <div className={`h-4 w-4 ${show ? "" : "transform -rotate-90"}`}>
              <DropdownIcon />
            </div>
          </button>
        </div>
        {show && (<div className='pl-8 pr-4 bg-white'>
          <HeaderPackage idOrder={order.id} />
          <div className='max-h-[48dvh] overflow-y-auto'>
            {order.parcels?.map((parcel) => (
              <RowPackage parcelData={parcel} key={parcel.id} />
            ))}
          </div>
        </div>)}
      </div>
      {/* {showModal && (
        <OrderEdit order={order} setShowModal={() => setShowModal(false)} />
      )} */}
    </div>


  )
}

export default RowOrder