import { PlusIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import PackageAdd from '../modal/PackageAdd'

type HeaderPackageProps = {
  idOrder: string
}

function HeaderPackage({ idOrder }: HeaderPackageProps) {

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
      <div className='flex flex-row item-center font-semibold p-4 border-b border-blue-gray-100 text-white bg-cyan-900'>
        <span className='basis-[12%] px-1'>
          Mã bưu kiện
        </span>
        <span className='basis-[9%] px-1'>
          Cân nặng
        </span>
        <span className='basis-[9%] px-1'>
          Chiều dài
        </span>
        <span className='basis-[9%] px-1'>
          Chiều rộng
        </span>
        <span className='basis-[9%] px-1'>
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
        <span className='basis-[6%] px-1'>

        </span>
        <button
          className='basis-[6%] border border-slate-200 flex justify-center rounded-sm text-slate-200 hover:text-teal-800 hover:bg-slate-100'
          onClick={() => setShowModal(true)}>
          <PlusIcon />
        </button>
      </div>
      {showModal && (
        <PackageAdd parcelData={newParcel} idOrder={idOrder} setShowModal={() => setShowModal(false)} />
      )}
    </div>

  )
}

export default HeaderPackage