"use client"

import { useOrder } from '@/context/OrderContext/OrderContext'
import { Item } from '@/types/order'
import { Cross1Icon, MinusIcon, Pencil1Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import React, { memo, useState } from 'react'

type RowItemProps = {
  item: Item;
}

function RowItem({ item }: RowItemProps) {

  const { dispatch } = useOrder()

  const handleDeleteItem = () => {
    dispatch({ type: "DELETE_ITEM", payload: item })
  }

  return (
    <div>
      <div className='flex flex-row item-center p-3 border-b border-blue-gray-100 bg-[#B8B8B8]'>
        <span className='basis-[20%] px-1'>
          <button className='bg-[#2C2C2C] rounded-sm text-white px-1'>
            {item.name}
          </button>
        </span>
        <span className='basis-[18%] px-1 flex gap-2.5'>
          <button className='w-4 h-4 border border-slate-600 rounded-sm'>
            <MinusIcon />
          </button>
          <span>
            {item.number}
          </span>
          <button className='w-4 h-4 border border-slate-600 rounded-sm'>
            <PlusIcon />
          </button>
        </span>
        <span className='basis-[50%] px-1'>
          {item.note}
        </span>
        <button className='basis-[4%] px-1 border-neutral-600 border-x hover:text-cyan-600'>
          <Pencil1Icon />
        </button>
        <button className='basis-[4%] px-1 border-neutral-600 border-r hover:text-rose-600' onClick={handleDeleteItem}>
          <TrashIcon />
        </button>
      </div>
    </div>

  )
}

export default memo<RowItemProps>(RowItem);