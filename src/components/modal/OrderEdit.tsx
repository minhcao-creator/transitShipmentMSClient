import { Order } from '@/types/order'
import { Cross1Icon } from '@radix-ui/react-icons'
import React from 'react'

type OrderEditProps = {
  order: Order
  setShowModal: () => void
}

function OrderEdit({ order, setShowModal }: OrderEditProps) {

  const handleUpdate = () => {
    setShowModal()
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
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.shop} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Số điện thoại người gửi
              </span>
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.shopContact} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Tên người nhận
              </span>
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.customer} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Số điện thoại người nhận
              </span>
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.customerContact} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Địa chỉ người nhận
              </span>
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.customerAddress} />
            </div>

          </div>
          <div className='flex-1 flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <span >
                Địa điểm nhận đơn
              </span>
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.receiveAddress} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Người nhận đơn
              </span>
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.receiver} />
            </div>


            <div className='flex flex-col gap-1'>
              <span >
                Vị trí đơn hàng
              </span>
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.location.toString()} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Trạng thái đơn hàng
              </span>
              <input className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.status} />
            </div>

            <div className='flex flex-col gap-1.5'>
              <span >
                Lời nhắn
              </span>
              <textarea rows={5} className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400' value={order.note} ></textarea>
            </div>

          </div>
        </div>

        <div className='flex items-center justify-between'>
          <button className='border border-rose-600 text-rose-600 rounded-sm px-4 py-1.5 hover:bg-rose-600 hover:text-white'>
            RESET
          </button>
          <button className='border border-teal-600 text-teal-600 rounded-sm px-4 py-1.5 hover:bg-teal-600 hover:text-white'
            onClick={handleUpdate}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderEdit