
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { Order } from '@/types/order'
import { Cross1Icon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

type OrderEditProps = {
  order: Order
  setShowModal: () => void
}

function OrderEdit({ order, setShowModal }: OrderEditProps) {

  const { dispatch } = useOrder()

  const [shopEdit, setShopEdit] = useState<string>(order.shop)
  const [customerEdit, setCustomerEdit] = useState<string>(order.customer)
  const [shopContactEdit, setShopContactEdit] = useState<string>(order.shopContact)
  const [customerContactEdit, setCustomerContactEdit] = useState<string>(order.customerContact)
  const [customerAddressEdit, setCustomerAddressEdit] = useState<string>(order.customerAddress)
  const [noteEdit, setNoteEdit] = useState<string>(order.note)
  const [receiveAddressEdit, setReceiveAddressEdit] = useState<string>(order.receiveAddress)
  const [receiverEdit, setReceiverEdit] = useState<string>(order.receiver)
  // const [locationEdit, setLocationEdit] = useState<number[]>(order.location)
  const [statusEdit, setStatusEdit] = useState<string>(order.status)

  const handleUpdate = (orderEdit: Order) => {
    // dispatch({ type: "EDIT_ORDER", payload: orderEdit })
    // setShowModal()
  }

  const handleReset = () => {
    setShopEdit(order.shop)
    setCustomerEdit(order.customer)
    setShopContactEdit(order.shopContact)
    setCustomerContactEdit(order.customerContact)
    setCustomerAddressEdit(order.customerAddress)
    setNoteEdit(order.note)
    setReceiveAddressEdit(order.receiveAddress)
    setReceiverEdit(order.receiver)
    setStatusEdit(order.status)
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
                value={shopEdit}
                onChange={(e) => setShopEdit(e.target.value)}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Số điện thoại người gửi
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={shopContactEdit}
                onChange={(e) => setShopContactEdit(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Tên người nhận
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={customerEdit}
                onChange={(e) => setCustomerEdit(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Số điện thoại người nhận
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={customerContactEdit}
                onChange={(e) => setCustomerContactEdit(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Địa chỉ người nhận
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={customerAddressEdit}
                onChange={(e) => setCustomerAddressEdit(e.target.value)} />
            </div>

          </div>
          <div className='flex-1 flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <span >
                Địa điểm nhận đơn
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={receiveAddressEdit}
                onChange={(e) => setReceiveAddressEdit(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Người nhận đơn
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={receiverEdit}
                onChange={(e) => setReceiverEdit(e.target.value)} />
            </div>


            <div className='flex flex-col gap-1'>
              <span >
                Vị trí đơn hàng
              </span>
              {/* <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={order.location.toString()}
              /> */}
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Trạng thái đơn hàng
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={statusEdit}
                onChange={(e) => setStatusEdit(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1.5'>
              <span >
                Lời nhắn
              </span>
              <textarea
                rows={5}
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={noteEdit}
                onChange={(e) => setNoteEdit(e.target.value)}
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
              shop: shopEdit,
              customer: customerEdit,
              shopContact: shopContactEdit,
              customerContact: customerContactEdit,
              customerAddress: customerAddressEdit,
              note: noteEdit,
              receiveAddress: receiveAddressEdit,
              receiver: receiverEdit,
              status: statusEdit
            })}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div >
  )
}

export default OrderEdit