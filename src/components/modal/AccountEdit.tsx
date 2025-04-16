"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { api } from '@/context/AuthContext/AuthContext'
import { useUser } from '@/context/UserContext/UserContext'
import { Role, Station, User } from '@/types/user'
import { Cross1Icon } from '@radix-ui/react-icons'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type AccountEditProps = {
  user: User,
  setShowModal: () => void
}

function AccountEdit({ user, setShowModal }: AccountEditProps) {
  const { dispatch } = useUser()
  const [showDropdown, setShowDropdown] = useState<Boolean>(false)
  const [showDropdownStations, setShowDropdownStations] = useState<Boolean>(false)
  const [roles, setRoles] = useState<Role[]>([])
  const [role, setRole] = useState<Role>(user.role)
  const [stations, setStations] = useState<Station[]>([])
  const [station, setStation] = useState<Station>(user.station)
  const router = useRouter()

  const getRoles = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/v1.0/roles')
      setRoles(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getStations = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/v1.0/stations')
      setStations(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async () => {
    try {
      const resRole = await api.patch(`/users/${user.id}/role/${role.id}/set`)

      const resStation = (role.name === "hub-manager" || role.name === "local-manager") && await api.patch(`/users/${user.id}/station/${station.id}/set`)

      if (resRole.data || resStation) {
        dispatch({
          type: "EDIT_USER", payload: {
            ...user,
            role,
            station
          }
        });
      }
      setShowModal()
    } catch (error) {
      console.log(error)
      router.push('/logout')
    }
  }

  useEffect(() => {
    getRoles()
    getStations()
  }, [])

  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-800 bg-opacity-80 flex items-center justify-center' onClick={setShowModal}>
      <div className='p-8 w-1/2 bg-white rounded flex flex-col gap-8' onClick={(event) => event.stopPropagation()}>
        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='text-sm pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              CÀI ĐẶT NGƯỜI DÙNG
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
              <span className='border border-neutral-400 p-2 flex-1 rounded-sm bg-neutral-200'>
                {user.id}
              </span>
            </div>
          </div>

          <div className='flex-1 flex flex-col gap-3'>
            <div className="flex flex-col text-sm gap-1 relative">
              <span >
                Phân quyền người dùng
              </span>
              <button className="flex gap-2 px-3 py-2 items-center justify-between rounded hover:bg-gray-100 border" onClick={() => setShowDropdown(!showDropdown)}>
                <span>{role ? role.name : "Chưa có"}</span>
                <DropdownIcon />
              </button>
              {
                showDropdown && (
                  <div className="z-20 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)] absolute top-10 left-32">
                    <ul className="text-sm text-gray-700">
                      {roles?.map((role: Role) => <li className="block px-4 py-2 hover:bg-gray-100">
                        <button onClick={() => {
                          setRole(role)
                          setShowDropdown(false)
                        }}>
                          {role.name}
                        </button>
                      </li>)}
                    </ul>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div className='flex items-start gap-12 justify-between'>
          <div className='flex-1 flex flex-col gap-3'>
            <div className="flex flex-col text-sm gap-1 relative">
              <span >
                Địa phận quản lý
              </span>
              <button className="flex gap-2 px-3 py-2 items-center justify-between rounded hover:bg-gray-100 border" onClick={() => role.name === "hub-manager" || role.name === "local-manager" ? setShowDropdownStations(!showDropdownStations) : null}>
                <span>{station ? station.name : "Chưa có"}</span>
                <DropdownIcon />
              </button>
              {
                showDropdownStations && (
                  <div className="z-20 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)] absolute top-10 left-60">
                    <ul className="text-sm text-gray-700">
                      {stations?.map((station: Station) => <li className="block px-4 py-2 hover:bg-gray-100">
                        <button onClick={() => {
                          setStation(station)
                          setShowDropdownStations(false)
                        }}>
                          {station.name}
                        </button>
                      </li>)}
                    </ul>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='border border-teal-600 text-teal-600 rounded-sm px-4 py-1.5 hover:bg-teal-600 hover:text-white'
            onClick={() => handleEdit()}
          >
            EDIT
          </button>
        </div>
      </div>
    </div >
  )
}

export default AccountEdit