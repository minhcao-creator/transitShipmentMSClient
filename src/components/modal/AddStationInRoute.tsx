import { api } from '@/context/AuthContext/AuthContext'
import { Station } from '@/types/orderLocal'
import React, { useEffect, useState } from 'react'

function AddStationInRoute() {

  const [stations, setStations] = useState<Station[]>()

  const getStations = async () => {
    try {
      const res = await api.get('/stations')
      setStations(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getStations()
  }, [])

  return (
    <div>
      {stations?.map((s, i) => (
        <div key={i}>
          <span>{s.id}</span>
          <span>{s.name}</span>
        </div>
      ))}
    </div>
  )
}

export default AddStationInRoute