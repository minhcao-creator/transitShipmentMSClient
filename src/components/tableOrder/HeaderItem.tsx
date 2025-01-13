import { useOrder } from '@/context/OrderContext/OrderContext'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

type HeaderItemProps = {
  idPackage: string
}

function HeaderItem({ idPackage }: HeaderItemProps) {

  const { dispatch } = useOrder()

  const id = (+new Date).toString(36).slice(-4)

  return (
    <div className='flex flex-row item-center font-semibold p-3 border-b border-blue-gray-100 text-white bg-[#4A4A4A]'>
      <span className='basis-[20%] px-1'>
        Tên món hàng
      </span>
      <span className='basis-[18%] px-1'>
        Số lượng
      </span>
      <span className='basis-[50%] px-1'>
        Ghi chú
      </span>
      <span className='basis-[6%] px-1'>

      </span>
      <button
        className='basis-[6%] border border-slate-200 flex justify-center rounded-sm text-slate-200 hover:text-teal-800 hover:bg-slate-100'
        onClick={() => dispatch({
          type: "ADD_ITEM", payload: {
            idPackage,
            item: {
              id,
              name: "ITEM" + id,
              number: 0,
              note: ""
            }
          }
        })}>
        <PlusIcon />
      </button>
    </div>
  )
}

export default HeaderItem