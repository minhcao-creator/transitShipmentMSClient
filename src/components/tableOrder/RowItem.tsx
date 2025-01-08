import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React from 'react'

function RowItem() {
  return (
    <div className='flex flex-row item-center p-3 border-b border-blue-gray-100 bg-[#B8B8B8]'>
      <span className='basis-[20%] px-1'>
        <button className='bg-[#2C2C2C] rounded-sm text-white px-1'>
          AA001
        </button>
      </span>
      <span className='basis-[18%] px-1'>
        Số lượng
      </span>
      <span className='basis-[50%] px-1'>
        Ghi chú
      </span>
      <button className='basis-[4%] px-1'>
        <Pencil1Icon />
      </button>
      <button className='basis-[4%] px-1'>
        <TrashIcon />
      </button>
    </div>
  )
}

export default RowItem