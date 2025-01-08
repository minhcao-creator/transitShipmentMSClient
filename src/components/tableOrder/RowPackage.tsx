import DropdownIcon from '@/assets/img/dropdownIcon'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import RowItem from './RowItem'
import HeaderItem from './HeaderItem'

function RowPackage() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div>
      <div className='flex flex-row item-center p-3 border-b border-blue-gray-100 bg-[#EDEDED]'>
        <span className='basis-[12%] px-1'>
          <button className='bg-[#2C2C2C] rounded-sm text-white px-1'>
            AA001
          </button>
        </span>
        <span className='basis-[12%] px-1'>
          Cân nặng
        </span>
        <span className='basis-[12%] px-1'>
          Chiều dài
        </span>
        <span className='basis-[12%] px-1'>
          Chiều cao
        </span>
        <span className='basis-[12%] px-1'>
          Loại
        </span>
        <span className='basis-[18%] px-1'>
          Ghi chú
        </span>
        <span className='basis-[10%] px-1'>
          Trạng thái
        </span>
        <button className='basis-[4%] px-1'>
          <Pencil1Icon />
        </button>
        <button className='basis-[4%] px-1'>
          <TrashIcon />
        </button>
        <button className='basis-[4%] px-1'
          onClick={() => setShow(!show)}>
          <div className={`h-4 w-4 ${show ? "" : "transform -rotate-90"}`}>
            <DropdownIcon />
          </div>
        </button>
      </div>
      {show && (
        <div className='pl-8 pr-4 bg-[#EDEDED]'>
          <HeaderItem />
          <div className='max-h-[32dvh] overflow-y-auto'>
            <RowItem />
            <RowItem />
            <RowItem />
            <RowItem />
            <RowItem />
            <RowItem />
            <RowItem />
            <RowItem />
            <RowItem />
          </div>
        </div>
      )}
    </div>

  )
}

export default RowPackage