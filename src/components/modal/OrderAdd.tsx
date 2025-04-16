"use client"

import { api, useAuth } from '@/context/AuthContext/AuthContext'
import { useOrder } from '@/context/OrderContext/OrderContext'
import { Order } from '@/types/orderLocal'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type OrderAddProps = {
  order: Order,
  setShowModal: () => void
}

function OrderAdd({ order, setShowModal }: OrderAddProps) {
  const { dispatch } = useOrder()
  const router = useRouter()

  const [senderNameAdd, setSenderNameAdd] = useState<string>(order.senderName)
  const [receiverNameAdd, setReceiverNameAdd] = useState<string>(order.receiverName)
  const [receiverAddressAdd, setReceiverAddressAdd] = useState<string>(order.receiverAddress)
  const [senderPhoneNumberAdd, setSenderPhoneNumberAdd] = useState<string>(order.senderPhoneNumber)
  const [receiverPhoneNumberAdd, setReceiverPhoneNumberAdd] = useState<string>(order.receiverPhoneNumber)
  const [messageAdd, setMessageAdd] = useState<string>(order.message)

  const { user } = useAuth()
  console.log(user)

  const handleUpdate = async (orderAdd: Order) => {
    try {
      const res = await api.post('/orders', orderAdd)
      if (res.data) {
        await api.patch(`orders/${order.id}/status/OrderStatuses001/set`);
        await api.patch(`orders/${order.id}/post-office-manager/${user?.id}/set`);
        await api.patch(`orders/${order.id}/departure-station/${user?.station.id}/set`)
        dispatch({ type: "ADD_ORDER", payload: orderAdd })
        setShowModal()
      }
    } catch (error) {
      console.log(error)
      router.push('/logout')
    }
  }

  const handleReset = () => {
    setSenderNameAdd(order.senderName)
    setReceiverNameAdd(order.receiverName)
    setReceiverAddressAdd(order.receiverAddress)
    setSenderPhoneNumberAdd(order.senderPhoneNumber)
    setReceiverPhoneNumberAdd(order.receiverPhoneNumber)
    setMessageAdd(order.message)
  }

  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-800 bg-opacity-80 flex items-center justify-center'>
      <div className='p-8 w-1/2 bg-white rounded flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='text-sm pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              THÊM ĐƠN HÀNG
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex flex-1 gap-1 items-center justify-center'>
          <span >
            Mã đơn hàng :
          </span>
          <span className='p-2 font-bold'>
            {order.id}
          </span>
        </div>

        <div className='flex items-start justify-between gap-4'>

          <div className='flex-1  flex flex-col gap-1'>
            <span >
              Tên người gửi
            </span>
            <input
              className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
              value={senderNameAdd}
              onChange={(e) => setSenderNameAdd(e.target.value)}
            />
          </div>

          <div className='flex-1  flex flex-col gap-1'>
            <span >
              Tên người nhận
            </span>
            <input
              className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
              value={receiverNameAdd}
              onChange={(e) => setReceiverNameAdd(e.target.value)} />
          </div>

        </div>

        <div className='flex items-start justify-between gap-4'>

          <div className='flex-1  flex flex-col gap-1'>
            <span >
              Số điện thoại người gửi
            </span>
            <input
              className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
              value={senderPhoneNumberAdd}
              onChange={(e) => setSenderPhoneNumberAdd(e.target.value)} />
          </div>

          <div className='flex-1  flex flex-col gap-1'>
            <span >
              Số điện thoại người nhận
            </span>
            <input
              className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
              value={receiverPhoneNumberAdd}
              onChange={(e) => setReceiverPhoneNumberAdd(e.target.value)} />
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <span >
            Địa chỉ người nhận
          </span>
          <input
            className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
            value={receiverAddressAdd}
            onChange={(e) => setReceiverAddressAdd(e.target.value)} />
        </div>

        <div className='flex flex-col gap-1.5'>
          <span >
            Lời nhắn
          </span>
          <textarea
            rows={2}
            className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
            value={messageAdd}
            onChange={(e) => setMessageAdd(e.target.value)}
          ></textarea>
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='border border-rose-600 text-rose-600 rounded-sm px-4 py-1.5 hover:bg-rose-600 hover:text-white'
            onClick={handleReset}
          >
            ĐẶT LẠI
          </button>
          <button
            className='border border-teal-600 text-teal-600 rounded-sm px-4 py-1.5 hover:bg-teal-600 hover:text-white'
            onClick={() => handleUpdate({
              ...order,
              senderName: senderNameAdd,
              receiverName: receiverNameAdd,
              receiverAddress: receiverAddressAdd,
              senderPhoneNumber: senderPhoneNumberAdd,
              receiverPhoneNumber: receiverPhoneNumberAdd,
              message: messageAdd,
              postOfficeManager: user,
              status: {
                id: "OrderStatuses001",
                name: "Pending"
              }
            })}
          >
            THỰC HIỆN
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderAdd