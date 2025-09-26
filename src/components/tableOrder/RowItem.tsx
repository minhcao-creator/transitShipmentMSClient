"use client"

import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { Item } from '@/types/orderLocal'
import { CheckIcon, MinusIcon, Pencil1Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

type RowItemProps = {
  item: Item;
  idParcel: string;
  idOrder: string;
  index: number;
  isShowParcel: boolean;
}

function RowItem({ item, idParcel, idOrder, index, isShowParcel }: RowItemProps) {

  const { dispatch } = useOrder()

  const [editNote, setEditNote] = useState<boolean>(false)

  const [note, setNote] = useState<string>(item.note)

  const handleDeleteItem = () => {
    dispatch({ type: "DELETE_ITEM", payload: item })
  }

  const handleEditItem = (itemEdit: Item) => {
    dispatch({ type: "EDIT_ITEM", payload: itemEdit })
  }

  const handleEditButton = () => {
    if (editNote) {
      handleEditItem({ ...item, note })
    }
    setEditNote(!editNote)
  }

  return (
    <div>
      <div className='flex flex-row item-center p-4 border-b border-gray-400 bg-[#dedede]'>
        <span className='basis-[4%] px-2 border-r border-gray-900'>
          {index}
        </span>
        {isShowParcel && <span className='basis-[10%] px-2 border-r border-gray-900'>
          {idOrder}
        </span>}
        {isShowParcel && <span className='basis-[10%] px-2 border-r border-gray-900'>
          {idParcel}
        </span>}
        <span className={isShowParcel ? 'basis-[10%] px-2 border-r border-gray-900' : 'basis-[20%] px-2 border-r border-gray-900'}>
          {item.id}
        </span>
        <span className='basis-[20%] px-2 border-r border-gray-900'>
          {item.name}
        </span>
        <span className='basis-[12%] px-1 flex gap-2 border-r border-gray-900'>
          <button className='w-4 h-4 border border-slate-600 rounded-sm hover:bg-slate-600 hover:text-white'
            onClick={() => {
              handleEditItem({
                ...item,
                quantity: item.quantity - 1
              })
            }}>
            <MinusIcon />
          </button>
          <span className='w-4 flex justify-center'>
            {item.quantity}
          </span>
          <button className='w-4 h-4 border border-slate-600 rounded-sm hover:bg-slate-600 hover:text-white'
            onClick={() => {
              handleEditItem({
                ...item,
                quantity: item.quantity + 1
              })
            }}>
            <PlusIcon />
          </button>
        </span>
        {editNote ? (
          <input className='basis-[25%] px-2 border-b border-black mr-[2%] focus:outline-none bg-[#B8B8B8]' value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        ) : (
          <span className='basis-[25%] px-2'>
            {item.note}
          </span>
        )}

        <button className='basis-[5%] px-2 border-neutral-600 border-x hover:text-cyan-600'
          onClick={handleEditButton}>
          {editNote ? <CheckIcon /> : <Pencil1Icon />}
        </button>
        <button className='basis-[4%] px-1 border-neutral-600 border-r hover:text-rose-600' onClick={handleDeleteItem}>
          <TrashIcon />
        </button>
      </div>
    </div >

  )
}

export default RowItem;