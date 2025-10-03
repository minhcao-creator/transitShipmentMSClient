"use client"

import React, { useState } from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'
import AlertComponent from '../AlertComponent'
import Step1 from './RouteAddComponent/Step1'
import Step2 from './RouteAddComponent/Step2'
import Step3 from './RouteAddComponent/Step3'
import Step4 from './RouteAddComponent/Step4'
import { api } from '@/context/AuthContext/AuthContext'
import { Route, RouteMap, Board, Vehicle } from "@/types/routeInit"
import { useBoard } from '@/context/RouteContext/RouteContext'
import { User } from '@/types/user'
import { Station } from '@/types/orderStation'

type RouteAddProps = {
  setShowModal: () => void
}

function RouteAdd({ setShowModal }: RouteAddProps) {

  const { boardState, dispatch } = useBoard();

  const [startCode, setStartCode] = useState<string>('')
  const [endCode, setEndCode] = useState<string>('')
  const [startedAt, setStartedAt] = useState<Date>(new Date())
  const [endedAt, setEndedAt] = useState<Date>(new Date())

  const [vehicle, setVehicle] = useState<Vehicle>()
  const [drivers, setDrivers] = useState<User[] | [{}]>([{}])
  const [stations, setStations] = useState<Station[] | [{}]>([{}])

  const [currentStep, setCurrentStep] = useState(1);
  const [routeId, setRouteId] = useState<string>(`ROU${(+new Date).toString(36).slice(-6)}`)
  const steps = [
    {
      id: 1, title: "1", component: <Step1
        currentStep={currentStep}
        startCode={startCode}
        endCode={endCode}
        setStartCode={setStartCode}
        setEndCode={setEndCode}
        startedAt={startedAt}
        setStartedAt={setStartedAt}
        endedAt={endedAt}
        setEndedAt={setEndedAt}
      />
    },
    { id: 2, title: "2", component: <Step2 currentStep={currentStep} vehicle={vehicle} setVehicle={setVehicle} /> },
    { id: 3, title: "3", component: <Step3 currentStep={currentStep} drivers={drivers} setDrivers={setDrivers} /> },
    { id: 4, title: "4", component: <Step4 currentStep={currentStep} stations={stations} setStations={setStations} /> },
  ];

  const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);

  const handleStep1 = async () => {
    try {
      const res = await api.post('/routes', {
        id: routeId,
        startCode,
        endCode,
        startedAt,
        endedAt,
        ordinalNumber: boardState.ordered.length + 1,
      })
      if (res.data) {
        await api.patch(`/routes/${routeId}/stations/WAREHOUSE-001/add`, {
          ordinalNumber: 0,
          etd: "2025-09-05T21:01:08.552Z",
          eta: "2025-09-05T21:01:08.552Z",
          departuredAt: "2025-09-05T21:01:08.552Z",
          arrivedAt: "2025-09-05T21:01:08.552Z",
          flag: false,
        })
        await api.patch(`/routes/${routeId}/status/INIT/set`)
      }

      setAlert({ type: "success", message: "Tạo chuyến hàng thành công" })

    } catch (error) {
      console.log(error)
    }
  }

  const handleStep2 = async () => {
    try {
      await api.patch(`/vehicles/${vehicle?.id}/status/VSACTIVE/set`)
      await api.patch(`/routes/${routeId}/vehicle/${vehicle?.id}/set`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleStep3 = async () => {
    try {
      drivers.map(async (driver) => await api.patch(`/routes/${routeId}/drivers/${driver.id}/add`))
    } catch (error) {
      console.log(error)
    }
  }

  const handleStep4 = async () => {
    try {
      const stationInit = [{
        station: 'WAREHOUSE-001',
        ordinalNumber: 0,
        etd: "2025-09-05T21:01:08.552Z",
        eta: "2025-09-05T21:01:08.552Z",
        departuredAt: "2025-09-05T21:01:08.552Z",
        arrivedAt: "2025-09-05T21:01:08.552Z",
        flag: false,
      }]
      const formatStations = stations.reduce((routeVisitsStations, station, index) => {
        routeVisitsStations.push({
          station: station.id,
          ordinalNumber: index + 1,
          etd: "2025-09-05T21:01:08.552Z",
          eta: "2025-09-05T21:01:08.552Z",
          departuredAt: "2025-09-05T21:01:08.552Z",
          arrivedAt: "2025-09-05T21:01:08.552Z",
          flag: false,
        })
        return routeVisitsStations;
      }, stationInit)
      dispatch({
        type: "ADD_TRIP", payload: {
          id: routeId,
          startCode,
          startedAt,
          endedAt,
          vehicle,
          status: {
            id: "INIT"
          },
          routeVisitsStations: formatStations,
          drivers,
        }
      })
      stations.map(async (station, index) => await api.patch(`/routes/${routeId}/stations/${station.id}/add`, {
        ordinalNumber: index + 1,
        etd: "2025-09-05T21:01:08.552Z",
        eta: "2025-09-05T21:01:08.552Z",
        departuredAt: "2025-09-05T21:01:08.552Z",
        arrivedAt: "2025-09-05T21:01:08.552Z",
        flag: false,
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const handleRouteAdd = () => {
    try {
      setCurrentStep((prev) => prev + 1)
      switch (currentStep) {
        case 1:
          handleStep1();
          break;
        case 2:
          handleStep2();
          break;
        case 3:
          handleStep3();
          break;
        case 4:
          handleStep4();
          break;
      }

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='absolute top-0 left-0 h-screen w-full px-24 z-50 p-8 bg-white rounded flex flex-col gap-2'>
      <div className='flex gap-4 mb-4'>
        <div className='flex-1 flex justify-center'>
          <span className='font-bold text-lg pb-2 tracking-wider text-cyan-900 mr-[-30px]'>
            CHUYẾN HÀNG: {routeId}
          </span>
        </div>
        <button onClick={setShowModal} className='w-4 h-4'>
          <Cross1Icon />
        </button>
      </div>

      <div className="space-y-4 ">
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div
              key={step.id}
              className={`flex items-center w-full gap-8 border rounded shadow-sm transition p-4 ${isActive
                ? "bg-cyan-50 border-cyan-800"
                : isCompleted
                  ? "bg-green-50 border-green-400"
                  : "bg-gray-100 border-gray-300"
                }`}
            >
              <div
                className={`font-semibold ${isCompleted
                  ? "text-green-600"
                  : isActive
                    ? "text-cyan-800"
                    : "text-gray-500"
                  }`}
              >
                <span className={`flex items-center justify-center w-8 h-8 rounded-full border font-semibold ${isCompleted
                  ? "bg-green-50 border-green-600"
                  : isActive
                    ? "bg-cyan-50 border-cyan-800"
                    : "text-gray-500"
                  }`}>{step.title}</span>
              </div>

              {(isActive || isCompleted) && (
                <div className='flex-1 text-gray-700 relative'>{step.component}</div>
              )}

              {isActive && (
                <button
                  onClick={handleRouteAdd}
                  disabled={currentStep > steps.length}
                  className="px-4 py-2 rounded bg-cyan-800 text-white hover:bg-cyan-800 disabled:bg-gray-400"
                >
                  {currentStep === steps.length ? "Hoàn thành" : "Tiếp tục"}
                </button>
              )}
            </div>
          );
        })}
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

export default RouteAdd