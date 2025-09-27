"use client"

import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext/AuthContext'
import { Cross1Icon } from '@radix-ui/react-icons'
import AlertComponent from '../AlertComponent'
import DatePickerComponent from '../DatePickerComponent'
import { Route } from '@/types/routes'

type OrderAddProps = {
  trip: Route,
  setShowModal: () => void
}

function RouteInfomation({ trip, setShowModal }: OrderAddProps) {

  const [startedAt, setStartedAt] = useState<Date>(new Date(trip.startedAt))
  const [receiverNameAdd, setReceiverNameAdd] = useState<string>('')
  const [receiverAddressAdd, setReceiverAddressAdd] = useState<string>('')
  const [endedAt, setEndedAt] = useState<Date>(new Date(trip.endedAt))
  const [receiverPhoneNumberAdd, setReceiverPhoneNumberAdd] = useState<string>('')
  const [messageAdd, setMessageAdd] = useState<string>('')

  const { authState } = useAuth()

  const addressData = {
    "TP.HCM": {
      "Quận 1": ["Phường 1", "Phường 5", "Phường 10"],
      "Quận 3": ["Phường 2", "Phường 7"],
    },
    "Hà Nội": {
      "Quận Hoàn Kiếm": ["Phường Hàng Bài", "Phường Tràng Tiền"],
      "Quận Ba Đình": ["Phường Ngọc Hà", "Phường Kim Mã"],
    }
  }

  const [city, setCity] = useState("")
  const [district, setDistrict] = useState("")
  const [ward, setWard] = useState("")

  const [open, setOpen] = useState<null | "city" | "district" | "ward">(null)

  const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);

  return (
    <div className='z-[2] absolute top-0 left-0 h-screen w-full bg-neutral-900 bg-opacity-90 flex items-center justify-center'>
      <div className='p-8 bg-white rounded flex flex-col gap-4'>
        <div className='flex gap-4 mb-8'>
          <div className='flex-1 flex justify-center'>
            <span className='font-bold text-lg pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              CHUYẾN ĐI : {trip.id}
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex items-start justify-between gap-4'>

          <div className='flex flex-col gap-1'>
            <span >
              Thời gian bắt đầu
            </span>
            <div className='border border-gray-800 rounded-sm'>
              <DatePickerComponent today={startedAt} setToday={setStartedAt} showTime={true} />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <span >
              Tên người nhận
            </span>
            <input
              className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
              placeholder="Nhập tên người nhận"
              value={receiverNameAdd}
              onChange={(e) => setReceiverNameAdd(e.target.value)} />
          </div>

        </div>

        <div className='flex items-start justify-between gap-4'>

          <div className='flex flex-col gap-1'>
            <span >
              Thời gian kết thúc
            </span>
            <div className='border border-gray-800 rounded-sm'>
              <DatePickerComponent today={endedAt} setToday={setEndedAt} showTime={true} />
            </div>

          </div>

          <div className='flex flex-col gap-1'>
            <span >
              Số điện thoại người nhận
            </span>
            <input
              className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
              placeholder="0xxxxxxxxx"
              value={receiverPhoneNumberAdd}
              onChange={(e) => setReceiverPhoneNumberAdd(e.target.value)} />
          </div>
        </div>

        <div className='flex flex-col gap-1.5'>
          <span >
            Lời nhắn
          </span>
          <textarea
            rows={2}
            className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
            value={messageAdd}
            placeholder="Nhập lưu ý đặc điểm món hàng"
            onChange={(e) => setMessageAdd(e.target.value)}
          ></textarea>
        </div>

        <div className='flex items-center justify-between w-full mt-8'>
          <button
            className='rounded-sm px-8 py-2 bg-gray-800 text-white hover:scale-110 transition-transform duration-200'
          >
            XUẤT PHIẾU
          </button>
          <button
            className='rounded-sm px-8 py-2 bg-cyan-800 text-white hover:scale-110 transition-transform duration-200'>
            CHỈNH SỬA
          </button>
        </div>
      </div>
      {
        alert && (
          <AlertComponent
            type={alert?.type}
            message={alert?.message}
            onClose={() => setAlert(null)}
          />
        )
      }
    </div >
  )
}

export default RouteInfomation