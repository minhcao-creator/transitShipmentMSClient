"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import RowPackage from './RowPackage'
import HeaderPackage from './HeaderPackage'

function RowOrder() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div>
      <div className='flex flex-row item-center p-3 border-b border-blue-gray-100 bg-white'>
        <span className='basis-[7%] px-1'>
          <button className='bg-[#2C2C2C] rounded-sm text-white px-1'>
            AA001
          </button>
        </span>
        <span className='basis-[10%] px-1'>
          Tên đơn hàng
        </span>
        <span className='basis-[17%] px-1'>
          Địa chỉ người nhận
        </span>
        <span className='basis-[17%] px-1'>
          Địa điểm nhận đơn
        </span>
        <span className='basis-[10%] px-1'>
          Người nhận đơn
        </span>
        <span className='basis-[17%] px-1'>
          Vị trí đơn hàng
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
      {show && (<div className='pl-8 pr-4 bg-white'>
        <HeaderPackage />
        <div className='max-h-[48dvh] overflow-y-auto'>
          <RowPackage />
          <RowPackage />
          <RowPackage />
          <RowPackage />
        </div>
      </div>)}
    </div>

  )
}

export default RowOrder