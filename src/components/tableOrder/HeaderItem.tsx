"use client"

import { api } from '@/context/AuthContext/AuthContext'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { PlusIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type HeaderItemProps = {
  idParcel: string;
  idOrder: string;
  isShowParcel: boolean;
}

function HeaderItem({ idParcel, idOrder, isShowParcel }: HeaderItemProps) {

  const router = useRouter()

  const { dispatch } = useOrder()

  const [showModal, setShowModal] = useState<boolean>(false)

  const id = `ITEM${(+new Date).toString(36).slice(-5)}`

  const handleAddItem = async () => {
    try {
      const itemAdd = {
        id,
        name: id,
        quantity: 1,
        note: ''
      }
      const res = await api.patch(`/parcels/${idParcel}/create`, itemAdd)
      if (res.data) {
        dispatch({
          type: "ADD_ITEM", payload: {
            idParcel,
            item: itemAdd
          }
        })
      }
    } catch (error) {
      console.log(error)
      router.push('/logout')
    }
  }

  return (
    <div className='flex flex-row item-center font-semibold p-4 border-b text-white bg-cyan-950 rounded-t'>
      <span className='basis-[4%] px-2 border-r'>
        STT
      </span>
      {isShowParcel && <span className='basis-[10%] px-2 border-r'>
        Mã đơn hàng
      </span>}
      {isShowParcel && <span className='basis-[10%] px-2 border-r'>
        Mã kiện hàng
      </span>}
      <span className={isShowParcel ? 'basis-[10%] px-2 border-r' : 'basis-[20%] px-2 border-r'}>
        Mã món hàng
      </span>
      <span className='basis-[20%] px-2 border-r'>
        Tên món hàng
      </span>
      <span className='basis-[12%] px-2 border-r'>
        Số lượng
      </span>
      <span className='basis-[25%] px-2'>
        Ghi chú
      </span>
      <button
        className='basis-[9%] flex justify-center items-center rounded-sm text-cyan-800 bg-cyan-100 hover:scale-110 transition-transform duration-200'
        onClick={() => setShowModal(true)}>
        <PlusIcon />
      </button>
    </div>
  )
}

export default HeaderItem