"use client"

import { api } from '@/context/AuthContext/AuthContext'
import { useOrder } from '@/context/OrderContext/OrderContext'
import { PlusIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React from 'react'

type HeaderItemProps = {
  idParcel: string
}

function HeaderItem({ idParcel }: HeaderItemProps) {

  const router = useRouter()

  const { dispatch } = useOrder()

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
    <div className='flex flex-row item-center font-semibold p-4 border-b border-blue-gray-100 text-white bg-cyan-950'>
      <span className='basis-[10%] px-1'>
        Mã món hàng
      </span>
      <span className='basis-[20%] px-1'>
        Tên món hàng
      </span>
      <span className='basis-[18%] px-1'>
        Số lượng
      </span>
      <span className='basis-[40%] px-1'>
        Ghi chú
      </span>
      <span className='basis-[6%] px-1'>

      </span>
      <button
        className='basis-[6%] border border-slate-200 flex justify-center rounded-sm text-slate-200 hover:text-teal-800 hover:bg-slate-100'
        onClick={handleAddItem}>
        <PlusIcon />
      </button>
    </div>
  )
}

export default HeaderItem