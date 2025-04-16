"use client"

import { api } from '@/context/AuthContext/AuthContext'
import { useUser } from '@/context/UserContext/UserContext'
import { User } from '@/types/user'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type AccountAddProps = {
  user: User,
  setShowModal: () => void
}

function AccountAdd({ user, setShowModal }: AccountAddProps) {
  const { dispatch } = useUser()
  const router = useRouter()

  const [username, setUsername] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [firstname, setFirstname] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [citizenId, setCitizenId] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [driverLicenseNumber, setDriverLicenseNumber] = useState<string>('')
  const [driverClass, setDriverClass] = useState<string>('')
  const [role, setRole] = useState<string>('')

  const handleAdd = async (userAdd: User) => {
    try {
      const res = await api.post('/users', {
        id: userAdd.id,
        username: userAdd.username,
        salt: "salt",
        password: "123123@abc",
        lastname: userAdd.lastname,
        firstname: userAdd.lastname,
        phoneNumber: userAdd.phoneNumber,
        citizenId: userAdd.citizenId,
        email: userAdd.email,
        driverLicenseNumber: userAdd.driverLicenseNumber,
        driverClass: userAdd.driverClass
      })
      if (res.data) {
        dispatch({ type: "ADD_USER", payload: userAdd })
        setShowModal()
      }
    } catch (error) {
      console.log(error)
      router.push('/logout')
    }
  }

  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-800 bg-opacity-80 flex items-center justify-center'
      onClick={setShowModal}>
      <div className='p-8 w-1/2 bg-white rounded flex flex-col gap-8' onClick={(event) => event.stopPropagation()}>
        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='text-sm pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              ĐĂNG KÝ NGƯỜI DÙNG
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex items-start gap-12 justify-between'>
          <div className='flex-1 flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <span >
                Mã người dùng
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm bg-neutral-200'
                value={citizenId}
                readOnly
                disabled />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                User Name
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                First Name
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Last Name
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Phone Number
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                CCCD
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={citizenId}
                onChange={(e) => setCitizenId(e.target.value)} />
            </div>

          </div>
          <div className='flex-1 flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <span >
                Email
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Bằng lái xe
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={driverLicenseNumber}
                onChange={(e) => setDriverLicenseNumber(e.target.value)} />
            </div>


            <div className='flex flex-col gap-1'>
              <span >
                Driver Class
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={driverClass}
                onChange={(e) => setDriverClass(e.target.value)}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Role
              </span>
              <input
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={role}
                onChange={(e) => setRole(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1.5'>
              <span >
                Lời nhắn
              </span>
              <textarea
                rows={5}
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
              ></textarea>
            </div>

          </div>
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='border border-teal-600 text-teal-600 rounded-sm px-4 py-1.5 hover:bg-teal-600 hover:text-white'
            onClick={() => handleAdd({
              ...user,
              id: citizenId,
              username,
              firstname,
              lastname,
              phoneNumber,
              citizenId,
              email,
              driverLicenseNumber,
              driverClass
            })}
          >
            ADD
          </button>
        </div>
      </div>
    </div >
  )
}

export default AccountAdd