"use client"

import { useUser } from '@/context/UserContext/UserContext'
import RowAccount from './RowAccount'

export default function RowAccounts() {
  const { userState } = useUser()
  return (
    <div className='max-h-[64dvh] overflow-y-auto'>
      {userState.map((user, index) => (
        <RowAccount user={user} key={user.id} index={index} />
      ))}
    </div>
  )
}