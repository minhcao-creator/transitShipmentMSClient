"use client"

import { Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'
import Board from '@/components/boadComponent/BoardOutBound'
import DatePickerComponent from '@/components/DatePickerComponent'
import DropdownIcon from '@/assets/img/dropdownIcon'
import { Route } from 'next'

function Outbound() {

  const titleFilterLabels: Record<string, string> = {
    id: "Mã đơn",
    senderName: "Người gửi",
    receiverName: "Người nhận",
    receiverAddress: "Địa chỉ nhận hàng",
    senderPhoneNumber: "SĐT gửi",
    receiverPhoneNumber: "SĐT nhận",
  };

  const [titleFilter, setTitleFilter] = useState<keyof Route | undefined>(undefined)
  const [showTitleFilter, setShowTitleFilter] = useState<boolean>(false)
  const [today, setToday] = useState<Date>(new Date())

  const [nameFilter, setNameFilter] = useState<string>("")

  return (
    <div className='h-screen m-4'>
      <div className='flex gap-24 py-4 items-center'>
        <span className='font-bold pr-28'>XUẤT HÀNG</span>
        <div className='flex gap-0.5'>
          <button
            className=" w-48 flex justify-between bg-white px-3 py-2 items-center rounded-l hover:bg-cyan-800 hover:text-white"
            onClick={() => setShowTitleFilter(!showTitleFilter)}
          >
            <span>{titleFilterLabels[titleFilter] || "Chọn trường lọc"}</span>
            <DropdownIcon />
          </button>
          <input
            className="block bg-white text-sm text-gray-900 px-3 py-2 focus-visible:outline-cyan-800 rounded-r"
            placeholder="Nhập tìm kiếm"
            disabled={!titleFilter}
            value={nameFilter}
            onChange={(e) => {
              setNameFilter(e.target.value)
              // dispatch({
              //   type: "SET_ORDERS_FILTER", payload: {
              //     titleFilter,
              //     nameFilter: e.target.value
              //   }
              // })
            }} />
          {nameFilter && <button className="absolute right-0 p-3 rounded-r text-gray-600"
            onClick={() => {
              setNameFilter('')
              // dispatch({ type: "SET_ORDERS_NONFILTER" })
            }}>
            <Cross1Icon />
          </button>}
        </div>
        <DatePickerComponent today={today} setToday={setToday} />
      </div>
      <Board />
    </div>

  )
}

export default Outbound