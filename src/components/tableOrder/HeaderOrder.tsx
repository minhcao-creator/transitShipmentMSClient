"use client"

import { PlusIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import OrderAdd from '../modal/OrderAdd'


function HeaderOrder() {

  const [showModal, setShowModal] = useState<boolean>(false)

  const newOrder = {
    id: `ORD${(+new Date).toString(36).slice(-6)}`,
    weight: 0,
    senderName: '',
    receiverName: '',
    receiverAddress: '',
    senderPhoneNumber: '',
    receiverPhoneNumber: '',
    message: '',
    parcels: [],
    createdAt: new Date().toISOString()
  }

  return (
    <div>
      <div className='flex flex-row item-center font-semibold p-4 border-b text-white bg-cyan-800 rounded-t'>
        <span className='basis-[4%] px-2 border-r'>
          STT
        </span>
        <span className='basis-[9%] px-2 border-r'>
          Mã đơn
        </span>
        <span className='basis-[10%] px-2 border-r'>
          Người gửi
        </span>
        <span className='basis-[9%] px-2 border-r'>
          SĐT gửi
        </span>
        <span className='basis-[10%] px-2 border-r'>
          Người nhận
        </span>
        <span className='basis-[9%] px-2 border-r'>
          SĐT nhận
        </span>
        <span className='basis-[22%] px-2 border-r'>
          Địa chỉ nhận hàng
        </span>
        <span className='basis-[8%] px-2 border-r'>
          Trạng thái
        </span>
        <span className='basis-[5%] px-2 border-r'>
          BK
        </span>
        <span className='basis-[5%] px-2'>
          MH
        </span>
        <button
          className='basis-[9%] flex justify-center items-center rounded-sm text-cyan-800 bg-cyan-100 hover:scale-110 transition-transform duration-200'
          onClick={() => setShowModal(true)}
        >
          <PlusIcon className='w-5 h-5' />
        </button>
      </div>
      {showModal && <OrderAdd order={newOrder} setShowModal={() => setShowModal(false)} />}
    </div>

  )
}

export default HeaderOrder