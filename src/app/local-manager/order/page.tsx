"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import UploadFile from '@/components/form/uploadFile'
import HeaderOrder from '@/components/tableOrder/HeaderOrder'
import Row from '@/components/tableOrder/Row'
import { useState } from 'react'

function Order() {
  const [showUpload, setShowUpload] = useState<Boolean>(false)
  const [packages, setPackages] = useState<Array<any>>([])

  return (
    <div className="h-screen mx-5 pt-5 text-sm">
      <div className="flex justify-between mb-2">
        <p className="font-bold tracking-wider">
          DANH SÁCH ĐƠN HÀNG
        </p>
        <div className='flex gap-4'>
          <button className="text-cyan-800 border border-cyan-800 rounded hover:bg-[#116A7B] px-4 py-1 text-sm hover:text-white" onClick={() => setShowUpload(!showUpload)}>
            + Thêm tập tin
          </button>
        </div>


        {showUpload && (
          <div className="absolute top-16 right-5 w-80 z-10">
            <UploadFile setPackages={setPackages} />
          </div>
        )}
      </div>
      <div className="flex text-sm gap-0.5 pb-4">
        <button className="flex gap-2 bg-white px-3 py-2 items-center rounded-l hover:bg-gray-100">
          <span>Filter Name</span>
          <DropdownIcon />
        </button>
        <input className="block bg-white text-sm text-gray-900 px-3 py-2" placeholder="Search" required></input>
        <button className="bg-white px-3 py-2 rounded-r hover:bg-gray-100">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </button>
      </div>
      <div className='text-xs'>
        <HeaderOrder />
        <Row />
      </div>
    </div>
  )
}

export default Order