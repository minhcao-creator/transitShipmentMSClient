import { PlusIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import PackageAdd from '../modal/PackageAdd'

type HeaderPackageProps = {
  idOrder: string;
  showIdOrder: boolean;
}

function HeaderPackage({ idOrder, showIdOrder }: HeaderPackageProps) {

  const [showModal, setShowModal] = useState<boolean>(false)

  const newParcel = {
    id: `P${(+new Date).toString(36).slice(-6)}`,
    weight: 0,
    depth: 0,
    height: 0,
    width: 0,
    note: '',
    type: {
      id: '',
      name: '',
    },
    status: {
      id: '',
      name: '',
    },
    items: [],
  }

  return (
    <div>
      <div className='flex flex-row item-center font-semibold p-4 border-b text-white bg-cyan-900 rounded-t'>
        <span className='basis-[4%] px-2 border-r'>
          STT
        </span>
        {showIdOrder && <span className='basis-[10%] px-2 border-r'>
          Mã đơn hàng
        </span>}
        <span className='basis-[10%] px-2 border-r'>
          Mã bưu kiện
        </span>
        <span className='basis-[7%] px-2 border-r'>
          C.nặng
        </span>
        <span className='basis-[7%] px-2 border-r'>
          Ch.dài
        </span>
        <span className='basis-[7%] px-2 border-r'>
          Ch.rộng
        </span>
        <span className='basis-[7%] px-2 border-r'>
          Ch.cao
        </span>
        <span className='basis-[12%] px-2 border-r'>
          Loại
        </span>
        <span className={showIdOrder ? 'basis-[18%] px-2 border-r' : 'basis-[30%] px-2 border-r'}>
          Ghi chú
        </span>
        <span className='basis-[9%] px-2'>
          Trạng thái
        </span>
        <button
          className='basis-[9%] flex justify-center items-center rounded-sm text-cyan-800 bg-cyan-100 hover:scale-110 transition-transform duration-200'
          onClick={() => setShowModal(true)}>
          <PlusIcon />
        </button>
      </div>
      {
        showModal && (
          <PackageAdd parcelData={newParcel} idOrder={idOrder} setShowModal={() => setShowModal(false)} />
        )
      }
    </div >

  )
}

export default HeaderPackage