"use client"

function HeaderAccount() {

  return (
    <div>
      <div className='flex flex-row item-center font-semibold p-4 border-b border-gray-100 text-white bg-cyan-800 rounded-t'>
        <span className='basis-[12%] px-2 border-r border-gray-100'>
          Mã người dùng
        </span>
        <span className='basis-[6%] px-2 border-r border-gray-100'>
          Tên
        </span>
        <span className='basis-[16%] px-2 border-r border-gray-100'>
          Họ và tên đệm
        </span>
        <span className='basis-[12%] px-2 border-r border-gray-100'>
          Số điện thoại
        </span>
        <span className='basis-[16%] px-2 border-r border-gray-100'>
          Bằng lái xe
        </span>
        <span className='basis-[20%] px-2 border-r border-gray-100'>
          Địa phận quản lý
        </span>
        <span className='basis-[12%] px-2 border-r border-gray-100'>
          Quyền
        </span>
        <span className='basis-[6%] px-2'>
          Cài đặt
        </span>
      </div>
    </div>

  )
}

export default HeaderAccount