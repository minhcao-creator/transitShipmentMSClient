"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import AccountAdd from '@/components/modal/AccountAdd'
import HeaderAccount from '@/components/tableAccount/HeaderAccount'
import RowAccounts from '@/components/tableAccount/RowAccounts'
import { useUser } from '@/context/UserContext/UserContext'
import { useState } from 'react'

function Accounts() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [filterTitle, setFilterTitle] = useState<String>('Tên người dùng')

  const { userState, dispatch } = useUser()

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
      <div className='pb-5'>
        <span className='text-sm font-semibold tracking-wider'>DANH SÁCH NGƯỜI DÙNG</span>
      </div>
      <div className='flex pb-4 justify-between'>
        <div className="flex text-sm gap-0.5">
          <button className="flex gap-2 bg-white px-3 py-2 items-center rounded-l hover:bg-gray-100">
            <span>{filterTitle}</span>
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
          <button
            className='border border-teal-800 flex justify-center rounded-sm text-teal-800 hover:text-white hover:bg-teal-800 px-4 py-2'
            onClick={() => setShowModal(true)}
          >
            <span>Đăng ký người dùng</span>
          </button>
          {showModal && <AccountAdd user={newUser} setShowModal={() => setShowModal(false)} />}
        </div>
      </div>

      <div className='text-xs'>
        <HeaderAccount />
        <RowAccounts />
      </div>
    </div>
    // 
  )
}

export default Accounts