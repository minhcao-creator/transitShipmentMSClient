"use client"

import { api } from '@/context/AuthContext/AuthContext'
import { useUser } from '@/context/UserContext/UserContext'
import { User } from '@/types/user'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import AlertComponent from '../AlertComponent'

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
  const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);

  const handleAdd = async (userAdd: User) => {
    try {

      if (!username.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập tên người dùng" });
        return;
      }

      if (!lastname.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập họ và tên đệm" });
        return;
      }

      if (!firstname.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập tên" });
        return;
      }

      if (!phoneNumber.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập số điện thoại" });
        return;
      } else if (!/^0\d{9}$/.test(phoneNumber)) {
        setAlert({ type: "error", message: "Số điện thoại phải bắt đầu bằng 0 và có 10 số" });
        return;
      }

      if (!citizenId.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập số CCCD" });
        return;
      } else if (!/^\d{12}$/.test(citizenId)) {
        setAlert({ type: "error", message: "Số CCCD phải có 12 số" });
        return;
      }

      if (!email.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập email" });
        return;
      } else if (!/^[\w.-]+@gmail\.com$/.test(email)) {
        setAlert({ type: "error", message: "Email phải là gmail" });
        return;
      }

      if (!driverLicenseNumber.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập số bằng lái xe" });
        return;
      } else if (!/^\d{12}$/.test(driverLicenseNumber)) {
        setAlert({ type: "error", message: "Số bằng lái xe phải có 12 số" });
        return;
      }

      if (!driverClass.trim()) {
        setAlert({ type: "error", message: "Vui lòng nhập cấp độ bằng lái" });
        return;
      } else if (!["B1", "B2", "C1", "D", "F"].includes(driverClass)) {
        setAlert({ type: "error", message: "Cấp độ bằng lái phải là B1, B2, C1, D, hoặc F" });
        return;
      }

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
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-900 bg-opacity-90 flex items-center justify-center'
    // onClick={setShowModal}
    >
      <div className='p-8 min-w-[50rem] bg-white rounded flex flex-col gap-12'
      // onClick={(event) => event.stopPropagation()}
      >
        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='font-bold text-lg pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              NGƯỜI DÙNG : {citizenId}
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex gap-8 justify-between'>
          <div className='flex-1 flex flex-col gap-3'>

            <div className='flex gap-1 items-center justify-between'>
              <span >
                Tên người dùng :
              </span>
              <input
                className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Nhập tên người dùng'
              />
            </div>

            <div className='flex gap-1 items-center justify-between'>
              <span >
                Họ và tên đệm :
              </span>
              <input
                className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 '
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder='Nhập họ và tên đệm'
              />
            </div>

            <div className='flex gap-1 items-center justify-between'>
              <span >
                Tên :
              </span>
              <input
                className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 '
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder='Chỉ nhập tên'
              />
            </div>

            <div className='flex gap-1 items-center justify-between'>
              <span >
                Số CCCD :
              </span>
              <input
                className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 '
                value={citizenId}
                onChange={(e) => setCitizenId(e.target.value)}
                placeholder='xxx xxx xxx xxx' />
            </div>

          </div>

          <div className='w-px bg-cyan-800'></div>

          <div className='flex-1 flex flex-col gap-3'>

            <div className='flex gap-1 items-center justify-between'>
              <span >
                Số điện thoại :
              </span>
              <input
                className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 '
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='0xxx xxx xxx'
              />
            </div>

            <div className='flex gap-1 items-center justify-between'>
              <span >
                Email :
              </span>
              <input
                className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 '
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Example@gmail.com'
              />
            </div>

            <div className='flex gap-1 items-center justify-between'>
              <span >
                Bằng lái xe :
              </span>
              <input
                className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 '
                value={driverLicenseNumber}
                onChange={(e) => setDriverLicenseNumber(e.target.value)}
                placeholder='xxx xxx xxx xxx'
              />
            </div>

            <div className='flex gap-1 items-center justify-between'>
              <span >
                Cấp độ bằng lái :
              </span>
              <input
                className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 '
                value={driverClass}
                onChange={(e) => setDriverClass(e.target.value)}
                placeholder='A1 B1 C1 D1 F'
              />
            </div>

          </div>
        </div>

        <div className='flex items-center justify-end'>
          <button
            className='rounded-sm px-8 py-2 bg-cyan-800 text-white hover:scale-110 transition-transform duration-200'
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
            THÊM
          </button>
        </div>
      </div>

      {
        alert && (
          <AlertComponent
            type={alert?.type}
            message={alert?.message}
            onClose={() => setAlert(null)}
          />
        )
      }

    </div >
  )
}

export default AccountAdd