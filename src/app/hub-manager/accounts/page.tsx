"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import AccountAdd from '@/components/modal/AccountAdd'
import HeaderAccount from '@/components/tableAccount/HeaderAccount'
import RowAccounts from '@/components/tableAccount/RowAccounts'
import { User } from '@/types/user'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

function Accounts() {

  const titleFilterLabels: Record<string, string> = {
    id: "Mã đơn",
    senderName: "Người gửi",
    receiverName: "Người nhận",
    receiverAddress: "Địa chỉ nhận hàng",
    senderPhoneNumber: "SĐT gửi",
    receiverPhoneNumber: "SĐT nhận",
  };

  const [showModal, setShowModal] = useState<boolean>(false)
  const [titleFilter, setTitleFilter] = useState<keyof User | undefined>(undefined)
  const [showTitleFilter, setShowTitleFilter] = useState<boolean>(false)

  const [nameFilter, setNameFilter] = useState<string>("")

  const newUser = {
    id: '',
    username: '',
    lastname: '',
    firstname: '',
    phoneNumber: '',
    citizenId: '',
    email: '',
    driverLicenseNumber: '',
    driverClass: '',
    role: {
      id: '',
      name: ''
    }
  }

  return (

    <div className="h-screen mx-4 pt-4">
      <div className='py-4'>
        <span className='text-md font-semibold tracking-wider'>DANH SÁCH NHÂN VIÊN</span>
      </div>
      <div className='flex pb-4 justify-between'>
        <div className="flex text-sm gap-0.5 relative">
          <button
            className=" w-48 flex justify-between bg-white px-3 py-2 items-center rounded-l hover:bg-cyan-800 hover:text-white"
            onClick={() => setShowTitleFilter(!showTitleFilter)}
          >
            <span>{titleFilterLabels[titleFilter] || "Chọn trường lọc"}</span>
            <DropdownIcon />
          </button>
          <input
            className="block bg-white text-sm text-gray-900 px-3 py-2 focus-visible:outline-cyan-800 rounded-r"
            placeholder="Nhập tìm kiếm"
            disabled={!titleFilter}
            value={nameFilter}
            onChange={(e) => {
              setNameFilter(e.target.value)
            }} />
          {nameFilter && <button className="absolute right-0 p-3 rounded-r text-gray-600"
            onClick={() => {
              setNameFilter('')
            }}>
            <Cross1Icon />
          </button>}
          {showTitleFilter && (
            <div className="absolute top-12 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
              {Object.entries(titleFilterLabels).map(([key, label]) => (
                <button
                  key={key}
                  className="hover:bg-rose-200 p-2 border rounded m-1"
                  onClick={() => {
                    setTitleFilter(key)
                    setShowTitleFilter(false)
                  }}
                >
                  {label}
                </button>
              ))}
              <button
                className="hover:bg-rose-200 p-2 border border-rose-200 text-rose-400 rounded m-1"
                onClick={() => {
                  setTitleFilter(undefined)
                  setShowTitleFilter(false)
                }}
              >
                Bỏ chọn
              </button>
            </div>
          )}
        </div>
        <div className='text-sm'>
          <button
            className='border border-cyan-800 flex justify-center rounded-sm text-cyan-800 hover:text-white hover:bg-cyan-800 px-4 py-2'
            onClick={() => setShowModal(true)}
          >
            <span>Đăng ký người dùng</span>
          </button>
          {showModal && <AccountAdd user={newUser} setShowModal={() => setShowModal(false)} />}
        </div>
      </div>

      <div className='text-sm'>
        <HeaderAccount />
        <RowAccounts />
      </div>
    </div>
    // 
  )
}

export default Accounts