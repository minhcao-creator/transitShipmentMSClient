"use client"

import React, { useEffect, useState } from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'
import AlertComponent from '../AlertComponent'
import DatePickerComponent from '../DatePickerComponent'
import { Route } from '@/types/routes'
import { TransitOrderGroupBy } from '@/types/routeInit'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { Order } from '@/types/orderStation'
import { api } from '@/context/AuthContext/AuthContext'

type OrderAddProps = {
  trip: Route,
  setShowModal: () => void
}

function RouteInfomation({ trip, setShowModal }: OrderAddProps) {

  const [startedAt, setStartedAt] = useState<Date>(new Date(trip.startedAt))
  const [endedAt, setEndedAt] = useState<Date>(new Date(trip.endedAt))
  const [startCode, setStartCode] = useState<string>(trip.startCode)
  const [endCode, setEndCode] = useState<string>(trip.endCode)
  const [driverNameAdd, setDriverNameAdd] = useState<any>(trip.drivers[0])
  const [vehicle, setVehicle] = useState<{
    id: string;
    vehicleRegistrationPlate: string;
  }>(trip.vehicle)

  const [showOrders, setShowOrders] = useState<string | null>(null)

  const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);

  const [transitToOrders, setTransitToOrders] = useState<TransitOrderGroupBy[]>([])

  const { orderState } = useOrder()

  const groupTransitOrdersWithOrders = async () => {
    try {
      if (orderState.orders.length === 0) return;

      const transitOrders = await Promise.all(
        trip.transitOrders.map(async (t: any) => {
          const res = await api.get(`transit-orders/${t.id}`);
          return res.data;
        })
      );

      const orderMap = new Map<string, Order>(
        orderState.orders.map((o) => [o.id, o])
      );

      const result: TransitOrderGroupBy[] = [];

      for (const to of transitOrders) {
        const { departureStation, arrivalStation } = to;

        const fullOrders: Order[] = (to.orders || [])
          .map((o: any) => orderMap.get(o.id))
          .filter((o: any): o is Order => !!o);

        if (departureStation.id !== "WAREHOUSE-001" && arrivalStation.id === "WAREHOUSE-001") {
          let group = result.find((g) => g.id === departureStation.id);
          if (!group) {
            group = {
              id: departureStation.id,
              name: departureStation.name,
              transitOrders: [],
            };
            result.push(group);
          }
          group.transitOrders.push({
            id: to.id,
            type: "arrival",
            orders: fullOrders,
          });
        }

        if (arrivalStation.id !== "WAREHOUSE-001" && departureStation.id === "WAREHOUSE-001") {
          let group = result.find((g) => g.id === arrivalStation.id);
          if (!group) {
            group = {
              id: arrivalStation.id,
              name: arrivalStation.name,
              transitOrders: [],
            };
            result.push(group);
          }
          group.transitOrders.push({
            id: to.id,
            type: "departure",
            orders: fullOrders,
          });
        }
      }

      setTransitToOrders(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    groupTransitOrdersWithOrders()
  }, [])

  return (
    <div className='z-[2] absolute top-0 left-0 h-screen w-full bg-neutral-900 bg-opacity-90 flex items-center justify-center'>
      <div
        className='p-8 bg-white rounded flex flex-col gap-4'
      >
        <div className='flex gap-4 mb-8'>
          <div className='flex-1 flex justify-center'>
            <span className='font-bold text-lg pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              CHUYẾN ĐI : {trip.id}
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">

          {/* --- Cột 1 --- */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span>Thời gian bắt đầu</span>
              <div className="border border-gray-800 rounded-sm">
                <DatePickerComponent today={startedAt} setToday={setStartedAt} showTime={true} />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span>Thời gian kết thúc</span>
              <div className="border border-gray-800 rounded-sm">
                <DatePickerComponent today={endedAt} setToday={setEndedAt} showTime={true} />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span>Mã vào cổng</span>
              <input
                className="border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800"
                placeholder="Nhập mã vào cổng"
                value={startCode}
                onChange={(e) => setStartCode(e.target.value)}
              />
            </div>

          </div>

          {/* --- Cột 2 --- */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span>Xe thực hiện</span>
              <input
                className="border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800"
                placeholder="Nhập xe thực hiện"
                value={vehicle.vehicleRegistrationPlate}
              />
            </div>

            <div className="flex flex-col gap-1">
              <span>Tài xế</span>
              <input
                className="border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800"
                placeholder="Nhập tài xế"
                value={driverNameAdd.username}
              />
            </div>

            <div className="flex flex-col gap-1">
              <span>Mã ra cổng</span>
              <input
                className="border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800"
                placeholder="Nhập mã vào cổng"
                value={endCode}
                onChange={(e) => setEndCode(e.target.value)}
              />
            </div>
          </div>

          {/* --- Cột 3 (cuộn) --- */}
          <div className="flex flex-col gap-1 relative">
            <span>Danh sách bưu cục</span>

            <div className="flex flex-col gap-2 border border-gray-600 rounded-sm p-2 h-[13rem] overflow-y-auto w-60">
              {transitToOrders.map((t: TransitOrderGroupBy) =>
                <div className=''>
                  <button
                    className="border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 hover:bg-gray-100"
                    onClick={() => showOrders == t.id ? setShowOrders(null) : setShowOrders(t.id)}
                  >
                    {t.name}
                  </button>
                  {showOrders == t.id && <div className='absolute top-8 right-60 max-h-60 overflow-y-auto bg-gray-100 border border-gray-800 rounded-sm'>
                    {t.transitOrders.map((tt) => <div className={`${tt.type == 'arrival' ? 'bg-[#562E1C]' : 'bg-[#006F62]'} text-white p-2 m-2 rounded-sm`}>
                      <div className='font-bold border-b border-white mb-2'>{tt.id}</div>
                      {tt.orders.map((o) => <div>
                        {o.id}
                      </div>)}
                    </div>)}
                  </div>}
                </div>)}
            </div>
          </div>
        </div>



        <div className='flex items-center justify-end w-full mt-8'>
          <button
            className='bg-[#2C2C2C] rounded-sm text-white px-8 py-2 hover:bg-gray-600'
            onClick={async () => await api.patch(`/routes/${trip.id}/status/PREP_I/set`)}
          >
            NHẬP HÀNG
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

export default RouteInfomation