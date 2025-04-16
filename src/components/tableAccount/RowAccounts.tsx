"use client"

import { useUser } from '@/context/UserContext/UserContext'
import RowAccount from './RowAccount'

export default function RowAccounts() {
  const { userState } = useUser()
  return (
    <div className='max-h-[64dvh] overflow-y-auto'>
      {userState.map((user) => (
        <RowAccount user={user} key={user.id} />
      ))}
    </div>
  )
}