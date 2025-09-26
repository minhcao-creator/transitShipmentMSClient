"use client"

import DropdownIcon from '@/assets/img/dropdownIcon'
import { api } from '@/context/AuthContext/AuthContext'
import { useUser } from '@/context/UserContext/UserContext'
import { Role, Station, User } from '@/types/user'
import { Cross1Icon } from '@radix-ui/react-icons'
import axios from 'axios'
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

      const resStation = await api.patch(`/users/${user.id}/station/${station.id}/set`)

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
      // router.push('/logout')
    }
  }

  useEffect(() => {
    getRoles()
    getStations()
  }, [])

  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-900 bg-opacity-90 flex items-center justify-center' onClick={setShowModal}>
      <div className='p-8 w-1/2 bg-white rounded flex flex-col gap-8' onClick={(event) => event.stopPropagation()}>
        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='font-bold text-lg pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              NGƯỜI DÙNG : {user.id}
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex items-start gap-12 justify-between'>

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
                  <div className="z-20 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)] absolute top-10 right-2">
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
              <button className="flex gap-2 px-3 py-2 items-center justify-between rounded hover:bg-gray-100 border" onClick={() => setShowDropdownStations(!showDropdownStations)}>
                <span>{station ? station.name : "Chưa có"}</span>
                <DropdownIcon />
              </button>
              {
                showDropdownStations && (
                  <div className="z-20 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)] absolute top-10 right-2">
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

        <div className='flex items-center justify-end'>
          <button
            className='rounded-sm px-8 py-2 bg-cyan-800 text-white hover:scale-110 transition-transform duration-200'
            onClick={() => handleEdit()}
          >
            CHỈNH SỬA
          </button>
        </div>
      </div>
    </div >
  )
}

export default AccountEdit