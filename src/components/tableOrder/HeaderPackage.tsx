import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

type HeaderPackageProps = {
  idOrder: string
}

function HeaderPackage({ idOrder }: HeaderPackageProps) {
  return (
    <div className='flex flex-row item-center font-semibold p-3 border-b border-blue-gray-100 text-white bg-[#646464]'>
      <span className='basis-[12%] px-1'>
        Mã bưu kiện
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
      <span className='basis-[6%] px-1'>

      </span>
      <button className='basis-[6%] border border-slate-200 flex justify-center rounded-sm text-slate-200 hover:text-teal-800 hover:bg-slate-100'>
        <PlusIcon />
      </button>
    </div>
  )
}

export default HeaderPackage