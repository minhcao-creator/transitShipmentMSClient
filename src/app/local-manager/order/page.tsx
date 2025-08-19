"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import DatePickerComponent from '@/components/DatePickerComponent'
import UploadFile from '@/components/form/uploadFile'
import Pagination from '@/components/Pagination'
import HeaderOrder from '@/components/tableOrder/HeaderOrder'
import Row from '@/components/tableOrder/Row'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { Order } from '@/types/orderStation'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

function OrderPage() {

  const titleFilterLabels: Record<string, string> = {
    id: "Mã đơn",
    senderName: "Người gửi",
    receiverName: "Người nhận",
    receiverAddress: "Địa chỉ nhận hàng",
    senderPhoneNumber: "SĐT gửi",
    receiverPhoneNumber: "SĐT nhận",
  };

  const [showUpload, setShowUpload] = useState<Boolean>(false)
  const [packages, setPackages] = useState<Array<any>>([])
  const { orderState, dispatch } = useOrder()
  const total = Math.ceil(orderState.orders.length / orderState.pageSize)
  const current = orderState.pageIndex

  const [titleFilter, setTitleFilter] = useState<keyof Order | undefined>(undefined)
  const [showTitleFilter, setShowTitleFilter] = useState<boolean>(false)

  const [nameFilter, setNameFilter] = useState<string>("")

  return (
    <div className="h-screen mx-4 pt-4">
      <div className="flex justify-between py-4">
        <span className='text-md font-semibold tracking-wider'>DANH SÁCH ĐƠN HÀNG</span>
        <button className="text-cyan-800 border border-cyan-800 rounded hover:bg-[#116A7B] px-4 py-1 text-sm hover:text-white" onClick={() => setShowUpload(!showUpload)}>
          + Thêm tập tin
        </button>

        {showUpload && (
          <div className="absolute top-16 right-5 w-80 z-10">
            <UploadFile setPackages={setPackages} />
          </div>
        )}
      </div>
      <div className='flex pb-4 gap-24'>
        <div className="flex text-sm gap-0.5 relative">
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
              dispatch({
                type: "SET_ORDERS_FILTER", payload: {
                  titleFilter,
                  nameFilter: e.target.value
                }
              })
            }} />
          {nameFilter && <button className="absolute right-0 p-3 rounded-r text-gray-600"
            onClick={() => {
              setNameFilter('')
              dispatch({ type: "SET_ORDERS_NONFILTER" })
            }}>
            <Cross1Icon />
          </button>}
          {/* {showTitleFilter && <div className='absolute top-12 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]'>
            <button
              className='hover:bg-rose-200 p-2 border rounded m-1'
              onClick={() => {
                setTitleFilter('id')
                setShowTitleFilter(!showTitleFilter)
              }}
            >Mã đơn</button>
            <button className='hover:bg-rose-200 p-2 border rounded m-1'
              onClick={() => {
                setTitleFilter('senderName')
                setShowTitleFilter(!showTitleFilter)
              }}>Người gửi</button>
            <button className='hover:bg-rose-200 p-2 border rounded m-1'
              onClick={() => {
                setTitleFilter('receiverName')
                setShowTitleFilter(!showTitleFilter)
              }}>Người nhận</button>
            <button className='hover:bg-rose-200 p-2 border rounded m-1'
              onClick={() => {
                setTitleFilter('receiverAddress')
                setShowTitleFilter(!showTitleFilter)
              }}>Địa chỉ nhận hàng</button>
            <button className='hover:bg-rose-200 p-2 border rounded m-1'
              onClick={() => {
                setTitleFilter('senderPhoneNumber')
                setShowTitleFilter(!showTitleFilter)
              }}>SĐT gửi</button>
            <button className='hover:bg-rose-200 p-2 border rounded m-1'
              onClick={() => {
                setTitleFilter('receiverPhoneNumber')
                setShowTitleFilter(!showTitleFilter)
              }}>SĐT nhận</button>
            <button className='hover:bg-rose-200 p-2 border border-rose-200 text-rose-400 rounded m-1'
              onClick={() => {
                setTitleFilter(undefined)
                setShowTitleFilter(!showTitleFilter)
                dispatch({ type: "SET_ORDERS_NONFILTER" })
              }}>Bỏ chọn</button>
          </div>} */}
          {showTitleFilter && (
            <div className="absolute top-12 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
              {Object.entries(titleFilterLabels).map(([key, label]) => (
                <button
                  key={key}
                  className="hover:bg-rose-200 p-2 border rounded m-1"
                  onClick={() => {
                    setTitleFilter(key)
                    setShowTitleFilter(false)
                  }}
                >
                  {label}
                </button>
              ))}
              <button
                className="hover:bg-rose-200 p-2 border border-rose-200 text-rose-400 rounded m-1"
                onClick={() => {
                  setTitleFilter(undefined)
                  setShowTitleFilter(false)
                  dispatch({ type: "SET_ORDERS_NONFILTER" })
                }}
              >
                Bỏ chọn
              </button>
            </div>
          )}
        </div>
        <DatePickerComponent />
      </div>
      <div className='text-sm'>
        <HeaderOrder />
        <Row />
        <Pagination total={total} current={current} />
      </div>
    </div>
  )
}

export default OrderPage