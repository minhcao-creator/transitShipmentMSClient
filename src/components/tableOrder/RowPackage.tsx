"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { Cross1Icon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import RowItem from './RowItem'
import HeaderItem from './HeaderItem'
import { useOrder } from '@/context/OrderContext/OrderContext'
import PackageEdit from '../modal/PackageEdit'
import { Parcels } from '@/types/orderLocal'

type RowPackageProps = {
  parcelData: Parcels;
}

function RowPackage({ parcelData }: RowPackageProps) {
  const [show, setShow] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const { dispatch } = useOrder()

  const handleDeletePackage = () => {
    // dispatch({ type: "DELETE_PACKAGE", payload: packageData })
  }

  return (
    <div>
      <div>
        <div className='flex flex-row item-center p-4 border-b border-blue-gray-100 bg-[#EDEDED]'>
          <span className='basis-[12%] px-1'>
            <button className='bg-[#2C2C2C] rounded-sm text-white px-1'>
              {parcelData.id}
            </button>
          </span>
          <span className='basis-[9%] px-1'>
            {parcelData.weight}
          </span>
          <span className='basis-[9%] px-1'>
            {parcelData.depth}
          </span>
          <span className='basis-[9%] px-1'>
            {parcelData.width}
          </span>
          <span className='basis-[9%] px-1'>
            {parcelData.height}
          </span>
          <span className='basis-[12%] px-1'>

          </span>
          <span className='basis-[18%] px-1'>
            {parcelData.note}
          </span>
          <span className='basis-[10%] px-1'>

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
            <HeaderItem idParcel={parcelData.id} />
            <div className='max-h-[32dvh] overflow-y-auto'>
              {parcelData.items.map((item) => (
                <RowItem item={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* {showModal && (
        <PackageEdit packageData={packageData} setShowModal={() => setShowModal(false)} />
      )} */}
    </div>
  )
}

export default RowPackage