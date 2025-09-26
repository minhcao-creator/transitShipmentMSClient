"use client"

import React, { useState } from 'react'
import { api, useAuth } from '@/context/AuthContext/AuthContext'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { Order } from '@/types/orderStation'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import AlertComponent from '../AlertComponent'

type OrderAddProps = {
  order: Order,
  setShowModal: () => void
}

function OrderEdit({ order, setShowModal }: OrderAddProps) {
  //console.log('orderEdit', order)
  const { dispatch } = useOrder()
  const router = useRouter()

  const parts = order.receiverAddress.split(",").map(p => p.trim())

  const [senderNameAdd, setSenderNameAdd] = useState<string>(order.senderName)
  const [receiverNameAdd, setReceiverNameAdd] = useState<string>(order.receiverName)
  const [receiverAddressAdd, setReceiverAddressAdd] = useState<string>(parts[0])
  const [senderPhoneNumberAdd, setSenderPhoneNumberAdd] = useState<string>(order.senderPhoneNumber)
  const [receiverPhoneNumberAdd, setReceiverPhoneNumberAdd] = useState<string>(order.receiverPhoneNumber)
  const [messageAdd, setMessageAdd] = useState<string>(order.message)

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

  const [city, setCity] = useState(parts[3])
  const [district, setDistrict] = useState(parts[2])
  const [ward, setWard] = useState(parts[1])

  const [open, setOpen] = useState<null | "city" | "district" | "ward">(null)

  const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);

  const handleUpdate = async (orderEdit: Order) => {
    try {
      if (!senderNameAdd.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập tên người gửi" });
        return;
      }
      if (!receiverNameAdd.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập tên người nhận" });
        return;
      }
      if (!city.trim()) {
        setAlert({ type: "error", message: "Vui lòng chọn tỉnh/thành phố" });
        return;
      }
      if (!district.trim()) {
        setAlert({ type: "error", message: "Vui lòng chọn quận/huyện" });
        return;
      }
      if (!ward.trim()) {
        setAlert({ type: "error", message: "Vui lòng chọn phường/xã" });
        return;
      }
      if (!receiverAddressAdd.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập địa chỉ người nhận" });
        return;
      }
      if (!senderPhoneNumberAdd.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập số điện thoại người gửi" });
        return;
      }
      if (!receiverPhoneNumberAdd.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập số điện thoại người nhận" });
        return;
      }

      setAlert({ type: "success", message: "Chỉnh sửa đơn thành công 🎉" });

      const res = await api.put(`/orders/${order.id}`, orderEdit)
      if (res.data) {
        dispatch({ type: "EDIT_ORDER", payload: orderEdit })
        setShowModal()
      }
    } catch (error) {
      console.log(error)
      // router.push('/logout')
    }
  }

  // const handleReset = () => {
  //   setSenderNameAdd(order.senderName)
  //   setReceiverNameAdd(order.receiverName)
  //   setReceiverAddressAdd(order.receiverAddress)
  //   setSenderPhoneNumberAdd(order.senderPhoneNumber)
  //   setReceiverPhoneNumberAdd(order.receiverPhoneNumber)
  //   setMessageAdd(order.message)
  // }


  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-900 bg-opacity-90 flex items-center justify-center'>
      <div className='p-8 w-1/2 bg-white rounded flex flex-col gap-4'>
        <div className='flex gap-4 mb-8'>
          <div className='flex-1 flex justify-center'>
            <span className='font-bold text-lg pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              ĐƠN HÀNG : {order.id}
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex items-start justify-between gap-4'>

          <div className='flex-1  flex flex-col gap-1'>
            <span >
              Tên người gửi
            </span>
            <input
              className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
              placeholder="Nhập tên người gửi"
              value={senderNameAdd}
              onChange={(e) => setSenderNameAdd(e.target.value)}
            />
          </div>

          <div className='flex-1  flex flex-col gap-1'>
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

          <div className='flex-1  flex flex-col gap-1'>
            <span >
              Số điện thoại người gửi
            </span>
            <input
              className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
              placeholder="0xxxxxxxxx"
              value={senderPhoneNumberAdd}
              onChange={(e) => setSenderPhoneNumberAdd(e.target.value)} />
          </div>

          <div className='flex-1  flex flex-col gap-1'>
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

        <div className='flex flex-col gap-2'>
          <div className="flex items-center justify-between">
            {/* CITY */}
            <div >
              Địa chỉ người nhận:
            </div>
            <div className="relative w-1/5">
              <div
                className="border border-gray-800 p-2 rounded-sm cursor-pointer bg-white"
                onClick={() => setOpen(open === "city" ? null : "city")}
              >
                {city || "Chọn Tỉnh/TP"}
              </div>
              {open === "city" && (
                <div className="absolute z-10 bg-white border rounded-sm w-full mt-1 shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
                  {Object.keys(addressData).map((c) => (
                    <div
                      key={c}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setCity(c)
                        setDistrict("")
                        setWard("")
                        setOpen(null)
                      }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* DISTRICT */}
            <div className="relative w-1/4">
              <div
                className={`border border-gray-800 p-2 rounded-sm cursor-pointer bg-white ${!city ? "opacity-50 pointer-events-none" : ""}`}
                onClick={() => setOpen(open === "district" ? null : "district")}
              >
                {district || "Chọn Quận/Huyện"}
              </div>
              {open === "district" && (
                <div className="absolute z-10 bg-white border rounded-sm w-full mt-1 shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
                  {Object.keys(addressData[city]).map((d) => (
                    <div
                      key={d}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setDistrict(d)
                        setWard("")
                        setOpen(null)
                      }}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* WARD */}
            <div className="relative w-1/4">
              <div
                className={`border border-gray-800 p-2 rounded-sm cursor-pointer bg-white ${!district ? "opacity-50 pointer-events-none" : ""}`}
                onClick={() => setOpen(open === "ward" ? null : "ward")}
              >
                {ward || "Chọn Phường/Xã"}
              </div>
              {open === "ward" && (
                <div className="absolute z-10 bg-white border rounded-sm w-full mt-1 shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
                  {addressData[city][district].map((w) => (
                    <div
                      key={w}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setWard(w)
                        setOpen(null)
                      }}
                    >
                      {w}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <input
            className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
            placeholder="Nhập số nhà, tên đường"
            value={receiverAddressAdd}
            onChange={(e) => setReceiverAddressAdd(e.target.value)} />
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

        <div className='flex items-center justify-end w-full mt-8'>
          {/* <button
            className='border border-rose-800 text-rose-800 rounded-sm px-4 py-1.5 hover:bg-rose-800 hover:text-white'
            onClick={handleReset}
          >
            ĐẶT LẠI
          </button> */}
          <button
            className='rounded-sm px-8 py-2 bg-cyan-800 text-white hover:scale-110 transition-transform duration-200'
            onClick={() => handleUpdate({
              ...order,
              stationId: authState.user?.station,
              weight: 10,
              senderName: senderNameAdd,
              receiverName: receiverNameAdd,
              receiverAddress: receiverAddressAdd + ', ' + ward + ', ' + district + ', ' + city,
              senderPhoneNumber: senderPhoneNumberAdd,
              receiverPhoneNumber: receiverPhoneNumberAdd,
              message: messageAdd
            })}
          >
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

export default OrderEdit