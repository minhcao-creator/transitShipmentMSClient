"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import RowPackage from './RowPackage'
import HeaderPackage from './HeaderPackage'
import { Order } from '@/types/order'
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
    dispatch({ type: "DELETE_ORDER", payload: order })
  }
  return (
    <div>
      <div>
        <div className='flex flex-row item-center p-3 border-b border-blue-gray-100 bg-white'>
          <span className='basis-[7%] px-1'>
            <button className='bg-[#2C2C2C] rounded-sm text-white px-1'>
              {order.id}
            </button>
          </span>
          <span className='basis-[10%] px-1'>
            Tên đơn hàng
          </span>
          <span className='basis-[17%] px-1'>
            {order.customerAddress}
          </span>
          <span className='basis-[17%] px-1'>
            {order.receiveAddress}
          </span>
          <span className='basis-[10%] px-1'>
            {order.receiver}
          </span>
          <span className='basis-[17%] px-1'>
            {order.location.toString()}
          </span>
          <span className='basis-[10%] px-1'>
            {order.status}
          </span>
          <button className='basis-[4%] px-1 border-neutral-600 border-x hover:text-cyan-600' onClick={() => setShowModal(true)}>
            <Pencil1Icon />
          </button>
          <button className='basis-[4%] px-1 border-neutral-600 border-r hover:text-rose-600' onClick={handleDeleteOrder}>
            <TrashIcon />
          </button>
          <button className='basis-[4%] px-1 border-neutral-600 border-r'
            onClick={() => setShow(!show)}>
            <div className={`h-4 w-4 ${show ? "" : "transform -rotate-90"}`}>
              <DropdownIcon />
            </div>
          </button>
        </div>
        {show && (<div className='pl-8 pr-4 bg-white'>
          <HeaderPackage idOrder={order.id} />
          <div className='max-h-[48dvh] overflow-y-auto'>
            {order.packages.map((packageData) => (
              <RowPackage packageData={packageData} key={packageData.id} />
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