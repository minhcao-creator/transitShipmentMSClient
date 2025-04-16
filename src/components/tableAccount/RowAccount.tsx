"use client"

import { User } from '@/types/user'
import { GearIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import AccountEdit from '../modal/AccountEdit'

type RowAccountProps = {
  user: User
}

function RowAccount({ user }: RowAccountProps) {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div>
      <div>
        <div className='flex flex-row item-center p-4 border-b border-blue-gray-100 bg-white'>
          <span className='basis-[12%] px-1'>
            <button className='bg-[#2C2C2C] rounded-sm text-white px-1'
            >
              {user.id}
            </button>
          </span>
          <span className='basis-[6%] px-1'>
            {user.lastname}
          </span>
          <span className='basis-[16%] px-1'>
            {user.firstname}
          </span>
          <span className='basis-[12%] px-1'>
            {user.phoneNumber}
          </span>
          <span className='basis-[16%] px-1'>
            {user.username}
          </span>
          <span className='basis-[20%] px-1 truncate hover:text-wrap'>
            {user.station?.name}
          </span>
          <span className='basis-[12%] px-1'>
            {user.role?.name}
          </span>
          <span className='basis-[6%] px-1'>
            <button className='text-cyan-900 rounded-sm'
              onClick={() => setShowModal(true)}
            >
              <GearIcon />
            </button>
          </span>

        </div>
      </div>
      {showModal && (
        <AccountEdit user={user} setShowModal={() => setShowModal(false)} />
      )}
    </div>


  )
}

export default RowAccount