"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { Cross1Icon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import RowItem from './RowItem'
import HeaderItem from './HeaderItem'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import PackageEdit from '../modal/PackageEdit'
import { Parcels } from '@/types/orderLocal'

type RowPackageProps = {
  idOrder: string;
  parcelData: Parcels;
  showIdOrder: boolean;
  index: number;
}

function RowPackage({ idOrder, parcelData, showIdOrder, index }: RowPackageProps) {
  const [show, setShow] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const { dispatch } = useOrder()

  const handleDeletePackage = () => {
    // dispatch({ type: "DELETE_PACKAGE", payload: packageData })
  }

  return (
    <div>
      <div>
        <div className='flex flex-row item-center p-4 border-b border-gray-400 bg-[#EDEDED]'>
          <span className='basis-[4%] px-2 border-r border-gray-900'>
            {index}
          </span>
          {showIdOrder && <span className='basis-[10%] px-2 border-r border-gray-900'>
            {idOrder}
          </span>}
          <span className='basis-[10%] px-2 border-r border-gray-900'>
            {parcelData.id}
          </span>
          <span className='basis-[7%] px-2 border-r border-gray-900'>
            {parcelData.weight}
          </span>
          <span className='basis-[7%] px-2 border-r border-gray-900'>
            {parcelData.depth}
          </span>
          <span className='basis-[7%] px-2 border-r border-gray-900'>
            {parcelData.width}
          </span>
          <span className='basis-[7%] px-2 border-r border-gray-900'>
            {parcelData.height}
          </span>
          <span className='basis-[12%] px-2 border-r border-gray-900'>
            {parcelData.type?.name}
          </span>
          <span className={showIdOrder ? 'basis-[18%] px-2 border-r border-gray-900' : 'basis-[30%] px-2 border-r border-gray-900'}>
            {parcelData.note}
          </span>
          <span className='basis-[9%] px-2'>
            Trạng thái
          </span>
          <button className='basis-[3%] px-2 border-neutral-600 border-x hover:text-cyan-600' onClick={() => setShowModal(true)}>
            <Pencil1Icon />
          </button>
          <button className='basis-[3%] px-2 border-neutral-600 border-r hover:text-rose-600' onClick={handleDeletePackage}>
            <TrashIcon />
          </button>
          <button className='basis-[3%] px-2 border-neutral-600 border-r'
            onClick={() => setShow(!show)}>
            <div className={`h-4 w-4 ${show ? "" : "transform -rotate-90"}`}>
              <DropdownIcon />
            </div>
          </button>
        </div>
        {show && (
          <div className='pl-8 pr-4 bg-[#EDEDED]'>
            <HeaderItem idParcel={parcelData.id} idOrder={idOrder} isShowParcel={false} />
            <div className='max-h-[32dvh] overflow-y-auto'>
              {parcelData.items.map((item, index) => (
                <RowItem item={item} key={item.id} index={index + 1} idParcel={parcelData.id} idOrder={idOrder} isShowParcel={false} />
              ))}
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <PackageEdit packageData={parcelData} setShowModal={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default RowPackage