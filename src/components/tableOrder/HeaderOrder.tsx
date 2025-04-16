"use client"

import { PlusIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import OrderAdd from '../modal/OrderAdd'


function HeaderOrder() {

  const [showModal, setShowModal] = useState<boolean>(false)

  const newOrder = {
    id: `ORD${(+new Date).toString(36).slice(-6)}`,
    senderName: '',
    receiverName: '',
    receiverAddress: '',
    senderPhoneNumber: '',
    receiverPhoneNumber: '',
    message: '',
    parcels: [],
  }

  return (
    <div>
      <div className='flex flex-row item-center font-semibold p-4 border-b text-white bg-cyan-800 rounded-t'>
        <span className='basis-[10%] px-1 border-r'>
          Mã đơn
        </span>
        <span className='basis-[10%] px-1 border-r'>
          Tên người gửi
        </span>
        <span className='basis-[10%] px-1 border-r'>
          SĐT gửi
        </span>
        <span className='basis-[10%] px-1 border-r'>
          Tên người nhận
        </span>
        <span className='basis-[10%] px-1 border-r'>
          SĐT nhận
        </span>
        <span className='basis-[21%] px-1 border-r'>
          Địa chỉ nhận hàng
        </span>
        <span className='basis-[8%] px-1 border-r'>
          Trạng thái
        </span>
        <span className='basis-[6%] px-1 border-r'>
          Bưu kiện
        </span>
        <span className='basis-[9%] px-1'>
          Món hàng
        </span>
        <button
          className='basis-[6%] border border-white flex justify-center rounded-sm text-white hover:text-cyan-800 hover:bg-white'
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