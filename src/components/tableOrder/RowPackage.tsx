"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { Cross1Icon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import RowItem from './RowItem'
import HeaderItem from './HeaderItem'
import { Package } from '@/types/order'
import { useOrder } from '@/context/OrderContext/OrderContext'
import PackageEdit from '../modal/PackageEdit'

type RowPackageProps = {
  packageData: Package;
}

function RowPackage({ packageData }: RowPackageProps) {
  const [show, setShow] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const { dispatch } = useOrder()

  const handleDeletePackage = () => {
    dispatch({ type: "DELETE_PACKAGE", payload: packageData })
  }

  return (
    <div>
      <div>
        <div className='flex flex-row item-center p-3 border-b border-blue-gray-100 bg-[#EDEDED]'>
          <span className='basis-[12%] px-1'>
            <button className='bg-[#2C2C2C] rounded-sm text-white px-1'>
              {packageData.id}
            </button>
          </span>
          <span className='basis-[9%] px-1'>
            {packageData.weight}
          </span>
          <span className='basis-[9%] px-1'>
            {packageData.length}
          </span>
          <span className='basis-[9%] px-1'>
            {packageData.width}
          </span>
          <span className='basis-[9%] px-1'>
            {packageData.height}
          </span>
          <span className='basis-[12%] px-1'>
            {packageData.type}
          </span>
          <span className='basis-[18%] px-1'>
            {packageData.note}
          </span>
          <span className='basis-[10%] px-1'>
            {packageData.status}
          </span>
          <button className='basis-[4%] px-1 border-neutral-600 border-x hover:text-cyan-600' onClick={() => setShowModal(true)}>
            <Pencil1Icon />
          </button>
          <button className='basis-[4%] px-1 border-neutral-600 border-r hover:text-rose-600' onClick={handleDeletePackage}>
            <TrashIcon />
          </button>
          <button className='basis-[4%] px-1 border-neutral-600 border-r'
            onClick={() => setShow(!show)}>
            <div className={`h-4 w-4 ${show ? "" : "transform -rotate-90"}`}>
              <DropdownIcon />
            </div>
          </button>
        </div>
        {show && (
          <div className='pl-8 pr-4 bg-[#EDEDED]'>
            <HeaderItem idPackage={packageData.id} />
            <div className='max-h-[32dvh] overflow-y-auto'>
              {packageData.items.map((item) => (
                <RowItem item={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
      </div>
      {showModal && (
        // <div className='absolute top-0 left-0 h-screen w-full bg-neutral-800 bg-opacity-60 flex items-center justify-center'>
        //   <div className='p-4 w-1/2 bg-white rounded'>
        //     <div className='flex gap-4'>
        //       <div className='flex-1 flex justify-center '>
        //         <span className='text-sm tracking-wider border-b border-neutral-600'>
        //           THÔNG TIN BƯU KIỆN
        //         </span>
        //       </div>
        //       <button onClick={() => setShowModal(false)}>
        //         <Cross1Icon />
        //       </button>
        //     </div>
        //   </div>
        // </div>
        <PackageEdit packageData={packageData} setShowModal={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default RowPackage