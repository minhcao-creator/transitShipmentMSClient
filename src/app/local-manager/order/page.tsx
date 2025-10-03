"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import DatePickerComponent from '@/components/DatePickerComponent'
import Pagination from '@/components/Pagination'
import HeaderOrder from '@/components/tableOrder/HeaderOrder'
import Row from '@/components/tableOrder/Row'
import { api, useAuth } from '@/context/AuthContext/AuthContext'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { Order, Station } from '@/types/orderStation'
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { format } from "date-fns"

function OrderPage() {

  const titleFilterLabels: Record<string, string> = {
    id: "Mã đơn",
    senderName: "Người gửi",
    receiverName: "Người nhận",
    receiverAddress: "Địa chỉ nhận hàng",
    senderPhoneNumber: "SĐT gửi",
    receiverPhoneNumber: "SĐT nhận",
  };

  const { orderState, dispatch } = useOrder()
  const { authState } = useAuth()

  const total = Math.ceil(orderState.orders.length / orderState.pageSize)
  const current = orderState.pageIndex

  const [titleFilter, setTitleFilter] = useState<keyof Order | undefined>(undefined)
  const [showTitleFilter, setShowTitleFilter] = useState<boolean>(false)

  const [nameFilter, setNameFilter] = useState<string>("")

  const [showAddTransit, setShowAddTransit] = useState<boolean>(false)

  const orderPending = orderState.orders.filter((order) => order.status?.name == "Pending")

  const [idIn, setIdIn] = useState<string>('')
  const [idOut, setIdOut] = useState<string>('')
  const [stations, setStations] = useState<Station[]>([])
  const [station, setStation] = useState<Station | undefined>(undefined)
  const [showStation, setShowStation] = useState<boolean>(false)

  const [today, setToday] = useState<Date>(new Date())

  const handleCreateTTOIn = async () => {
    try {
      setShowAddTransit(!showAddTransit)
      if (showAddTransit) return
      console.log(showAddTransit)
      const idIn = `TTO${(+new Date).toString(36).slice(-6)}`
      const res = await api.post('transit-orders', {
        id: idIn,
        createdAt: (new Date).toISOString(),
        isPlanned: false,
        departureStation: authState.user?.station,
        arrivalStation: "WAREHOUSE-001",
        weight: 0
      })
      if (res.data) {
        await api.patch(`transit-orders/${idIn}/status/TTOStatuses000/set`)
      }
      setIdIn(idIn)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteTTO = async () => {
    try {
      setShowAddTransit(!showAddTransit)
      await api.delete(`transit-orders/${idIn}`)
      await api.delete(`transit-orders/${idOut}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreateTTO = async () => {
    try {
      setShowAddTransit(!showAddTransit)
      await api.patch(`transit-orders/${idIn}/status/TTOStatuses001/set`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreateTTOOut = async (station: any) => {
    try {
      setStation(station)
      setShowStation(false)
      const idOut = `TTO${(+new Date).toString(36).slice(-6)}`
      const res = await api.post('transit-orders', {
        id: idOut,
        createdAt: (new Date).toISOString(),
        isPlanned: false,
        departureStation: "WAREHOUSE-001",
        arrivalStation: station.id,
        weight: 0
      })
      if (res.data) {
        await api.patch(`transit-orders/${idOut}/status/TTOStatuses000/set`)
      }
      setIdOut(idOut)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddOrderTTO = async (orderId: string) => {
    try {
      await api.patch(`transit-orders/${idIn}/orders/${orderId}/add`)
      await api.patch(`transit-orders/${idOut}/orders/${orderId}/add`)
      await api.patch(`orders/${orderId}/status/OrderStatuses001/set`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveOrderTTO = async (orderId: string) => {
    try {
      await api.patch(`transit-orders/${idIn}/orders/${orderId}/remove`)
      await api.patch(`transit-orders/${idOut}/orders/${orderId}/remove`)
      await api.patch(`orders/${orderId}/status/OrderStatuses000/set`)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function loadData() {
      try {
        const res = authState.user?.role == 'hub-manager' ? await api.get('orders') : await api.get(`orders/departure-stations/${authState.user?.station}?iso_string=${format(today, "yyyy-MM-dd")}`)
        dispatch({ type: "SET_ORDERS", payload: res.data });
      } catch (error) {
        console.log(error)
      }
    }
    loadData()
  }, [today])

  useEffect(() => {
    const getStations = async () => {
      const res = await api.get('stations')
      setStations(res.data)
    }
    getStations()
  }, [])

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
        <DatePickerComponent today={today} setToday={setToday} />
      </div>
      <div className='text-sm'>
        <HeaderOrder />
        <Row />
        <Pagination total={total} current={current} typeTable='order' />
      </div>
      <div className='absolute bottom-4 right-4'>
        <button
          className='p-2 rounded bg-cyan-800 shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]'
          onClick={handleCreateTTOIn}
        >
          <PlusIcon className='w-8 h-8 text-white' />
        </button>
      </div>
      <div className={`absolute text-white bottom-20 right-4 overflow-hidden duration-200`}>
        <div className={`relative flex flex-col gap-2 h-[33rem] w-[16rem] p-3 bg-cyan-800 bg-opacity-20 border-2 border-cyan-950 rounded ${showAddTransit ? "" : "hidden opacity-0"}`}>
          <p className='mx-auto py-1 px-2 rounded-sm font-medium text-white bg-cyan-900'>{idIn}</p>
          <button
            className="w-full flex justify-between bg-cyan-950 border border-white px-3 py-2 items-center rounded-sm"
            onClick={() => setShowStation(!showStation)}
          >
            <span>{station?.name || "Chọn bưu cục nhận"}</span>
            <DropdownIcon />
          </button>
          {showStation && (
            <div className="overflow-y-auto h-[25rem] text-cyan-950 absolute top-28 right-1 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
              {stations.map((station) => (
                <button
                  key={station.id}
                  className="hover:bg-rose-200 p-2 border rounded m-1"
                  onClick={() => handleCreateTTOOut(station)}
                >
                  {station.name}
                </button>
              ))}
              <button
                className="hover:bg-rose-200 p-2 border border-rose-200 text-rose-400 rounded m-1"
                onClick={() => {
                  setStation(undefined)
                  setShowStation(false)
                }}
              >
                Bỏ chọn
              </button>
            </div>
          )}
          <div className='flex-1 overflow-y-auto rounded-sm bg-cyan-900 border border-white p-2 bg-opacity-40'>
            {orderPending.map((order) => <div key={order.id} className='text-sm flex bg-cyan-950 border-opacity-40 rounded-sm m-1 py-1 px-2 items-center'>
              <div className='flex-1'>{order.id}</div>
              <input
                type="checkbox"
                className="w-4 h-4"
                onChange={(e) => {
                  if (e.target.checked) {
                    handleAddOrderTTO(order.id);
                  } else {
                    handleRemoveOrderTTO(order.id);
                  }
                }}
              />
            </div>)}
          </div>
          <div className="flex w-full justify-between">
            <button
              className="text-sm bg-opacity-90 rounded-sm px-4 py-1 bg-rose-800 text-white hover:scale-110 transition-transform duration-200"
              onClick={handleDeleteTTO}
            >
              BỎ
            </button>
            <button
              className="text-sm bg-opacity-90 rounded-sm px-4 py-1 bg-cyan-800 text-white hover:scale-110 transition-transform duration-200"
              onClick={handleCreateTTO}
            >
              TẠO
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OrderPage