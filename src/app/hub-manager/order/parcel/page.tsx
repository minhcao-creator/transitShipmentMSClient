"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import DatePickerComponent from '@/components/DatePickerComponent'
import Pagination from '@/components/Pagination'
import HeaderPackage from '@/components/tableOrder/HeaderPackage'
import RowPackage from '@/components/tableOrder/RowPackage'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { Order, Parcels } from '@/types/orderStation'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

function ParcelPage() {

  const titleFilterLabels: Record<string, string> = {
    id: "Mã bưu kiện",
    senderName: "Người gửi",
    receiverName: "Người nhận",
    receiverAddress: "Địa chỉ nhận hàng",
    senderPhoneNumber: "SĐT gửi",
    receiverPhoneNumber: "SĐT nhận",
  };

  const { orderState, dispatch } = useOrder()

  type ParcelWithOrder = Parcels & { idOrder: string };

  const parcels: ParcelWithOrder[] = [];
  for (const order of orderState.orders) {
    if (order.parcels) {
      parcels.push(
        ...order.parcels.map(parcel => ({
          ...parcel,
          idOrder: order.id
        }))
      );
    }
  }
  const total = Math.ceil(parcels.length / orderState.pageSize)
  const current = orderState.pageIndex

  const [titleFilter, setTitleFilter] = useState<keyof Order | undefined>(undefined)
  const [showTitleFilter, setShowTitleFilter] = useState<boolean>(false)

  const [nameFilter, setNameFilter] = useState<string>("")

  return (
    <div>
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
        <HeaderPackage idOrder='' showIdOrder={true} />
        <div className='h-[62dvh] overflow-y-auto'>
          {parcels?.map((parcel) => (
            <RowPackage parcelData={parcel} key={parcel.id} showIdOrder={true} idOrder={parcel.idOrder} />
          ))}
        </div>
        <Pagination total={total} current={current} />
      </div>
    </div>
  )
}

export default ParcelPage