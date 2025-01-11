"use client"

import { useOrder } from '@/context/OrderContext/OrderContext'
import { Order } from '@/types/order'
import { Cross1Icon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

type OrderAddProps = {
  order: Order,
  setShowModal: () => void
}

function OrderAdd({ order, setShowModal }: OrderAddProps) {
  const { dispatch } = useOrder()

  const [shopAdd, setShopAdd] = useState<string>(order.shop)
  const [customerAdd, setCustomerAdd] = useState<string>(order.customer)
  const [shopContactAdd, setShopContactAdd] = useState<string>(order.shopContact)
  const [customerContactAdd, setCustomerContactAdd] = useState<string>(order.customerContact)
  const [customerAddressAdd, setCustomerAddressAdd] = useState<string>(order.customerAddress)
  const [noteAdd, setNoteAdd] = useState<string>(order.note)
  const [receiveAddressAdd, setReceiveAddressAdd] = useState<string>(order.receiveAddress)
  const [receiverAdd, setReceiverAdd] = useState<string>(order.receiver)
  // const [locationAdd, setLocationAdd] = useState<number[]>(order.location)
  const [statusAdd, setStatusAdd] = useState<string>(order.status)

  const handleUpdate = (orderAdd: Order) => {
    dispatch({ type: "ADD_ORDER", payload: orderAdd })
    setShowModal()
  }

  const handleReset = () => {
    setShopAdd(order.shop)
    setCustomerAdd(order.customer)
    setShopContactAdd(order.shopContact)
    setCustomerContactAdd(order.customerContact)
    setCustomerAddressAdd(order.customerAddress)
    setNoteAdd(order.note)
    setReceiveAddressAdd(order.receiveAddress)
    setReceiverAdd(order.receiver)
    setStatusAdd(order.status)
  }

  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-800 bg-opacity-80 flex items-center justify-center'>
      <div className='p-8 w-1/2 bg-white rounded flex flex-col gap-8'>
        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='text-sm pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              THÔNG TIN ĐƠN HÀNG
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex items-start gap-12 justify-between'>
          <div className='flex-1 flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <span >
                Mã đơn hàng
              </span>
              <span className='border border-neutral-400 p-2 flex-1 rounded-sm bg-neutral-200'>
                {order.id}
              </span>
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Tên người gửi
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={shopAdd}
                onChange={(e) => setShopAdd(e.target.value)}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Số điện thoại người gửi
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={shopContactAdd}
                onChange={(e) => setShopContactAdd(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Tên người nhận
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={customerAdd}
                onChange={(e) => setCustomerAdd(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Số điện thoại người nhận
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={customerContactAdd}
                onChange={(e) => setCustomerContactAdd(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Địa chỉ người nhận
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={customerAddressAdd}
                onChange={(e) => setCustomerAddressAdd(e.target.value)} />
            </div>

          </div>
          <div className='flex-1 flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <span >
                Địa điểm nhận đơn
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={receiveAddressAdd}
                onChange={(e) => setReceiveAddressAdd(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Người nhận đơn
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={receiverAdd}
                onChange={(e) => setReceiverAdd(e.target.value)} />
            </div>


            <div className='flex flex-col gap-1'>
              <span >
                Vị trí đơn hàng
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={order.location.toString()}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Trạng thái đơn hàng
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={statusAdd}
                onChange={(e) => setStatusAdd(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1.5'>
              <span >
                Lời nhắn
              </span>
              <textarea
                rows={5}
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={noteAdd}
                onChange={(e) => setNoteAdd(e.target.value)}
              ></textarea>
            </div>

          </div>
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='border border-rose-600 text-rose-600 rounded-sm px-4 py-1.5 hover:bg-rose-600 hover:text-white'
            onClick={handleReset}
          >
            RESET
          </button>
          <button
            className='border border-teal-600 text-teal-600 rounded-sm px-4 py-1.5 hover:bg-teal-600 hover:text-white'
            onClick={() => handleUpdate({
              ...order,
              shop: shopAdd,
              customer: customerAdd,
              shopContact: shopContactAdd,
              customerContact: customerContactAdd,
              customerAddress: customerAddressAdd,
              note: noteAdd,
              receiveAddress: receiveAddressAdd,
              receiver: receiverAdd,
              status: statusAdd
            })}
          >
            ADD
          </button>
        </div>
      </div>
    </div >
  )
}

export default OrderAdd