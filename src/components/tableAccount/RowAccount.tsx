"use client"

import { User } from '@/types/user'
import { GearIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import AccountEdit from '../modal/AccountEdit'

type RowAccountProps = {
  user: User,
  index: number
}

function RowAccount({ user, index }: RowAccountProps) {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div>
      <div className={index % 2 == 0 ? 'bg-white' : 'bg-gray-200'}>
        <div className='flex flex-row item-center p-4'>
          <span className='basis-[12%] px-2 border-r border-gray-900'>
            {user.id}
          </span>
          <span className='basis-[6%] px-2 border-r border-gray-900'>
            {user.lastname}
          </span>
          <span className='basis-[16%] px-2 border-r border-gray-900'>
            {user.firstname}
          </span>
          <span className='basis-[12%] px-2 border-r border-gray-900'>
            {user.phoneNumber}
          </span>
          <span className='basis-[16%] px-2 border-r border-gray-900'>
            {user.username}
          </span>
          <span className='basis-[20%] px-2 truncate hover:text-wrap border-r border-gray-900'>
            {user.station?.name}
          </span>
          <span className='basis-[12%] px-2 border-r border-gray-900'>
            {user.role?.name}
          </span>
          <span className='basis-[6%] px-2'>
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