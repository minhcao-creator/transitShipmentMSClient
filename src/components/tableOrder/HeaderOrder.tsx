"use client"

import { PlusIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import OrderAdd from '../modal/OrderAdd'


function HeaderOrder() {

  const [showModal, setShowModal] = useState<boolean>(false)

  const newOrder = {
    id: (+new Date).toString(36).slice(-4),
    shop: '',
    customer: '',
    shopContact: '',
    customerContact: '',
    customerAddress: '',
    note: '',
    receiveAddress: '',
    receiver: '',
    location: [1, 2],
    packages: [],
    status: '',
  }

  return (
    <div>
      <div className='flex flex-row item-center font-semibold p-3 border-b border-blue-gray-100 text-white bg-[#9A9A9A] rounded-t'>
        <span className='basis-[7%] px-1'>
          Mã đơn
        </span>
        <span className='basis-[10%] px-1'>
          Tên đơn hàng
        </span>
        <span className='basis-[17%] px-1'>
          Địa chỉ người nhận
        </span>
        <span className='basis-[17%] px-1'>
          Địa điểm nhận đơn
        </span>
        <span className='basis-[10%] px-1'>
          Người nhận đơn
        </span>
        <span className='basis-[17%] px-1'>
          Vị trí đơn hàng
        </span>
        <span className='basis-[10%] px-1'>
          Trạng thái
        </span>
        <span className='basis-[6%] px-1'>

        </span>
        <button
          className='basis-[6%] border border-teal-800 flex justify-center rounded-sm text-teal-800 hover:text-white hover:bg-teal-800'
          onClick={() => setShowModal(true)}
        >
          <PlusIcon />
        </button>
      </div>
      {showModal && <OrderAdd order={newOrder} setShowModal={() => setShowModal(false)} />}
    </div>

  )
}

export default HeaderOrder