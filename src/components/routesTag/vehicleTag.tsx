import { Vehicle } from "@/types/routes"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { api } from "@/context/AuthContext/AuthContext"
import { Route } from "@/types/routeInit"
import { User } from "@/types/user"

type VehicleTagProps = {
  vehicle: Vehicle
  route: Route
  stationId: string,
  setStationId: any
}

export const statusBgMap: Record<string, string> = {
  VSAVAILABLE: "bg-[#F8F8F8] text-gray-800",
  VSACTIVE: "bg-rose-100 text-rose-800",
  VSONTRIP: "bg-emerald-100 text-emerald-800",
};

export function getStatusClasses(statusId?: string, extra = "") {
  return `${statusBgMap[statusId ?? ""] ?? "bg-white text-gray-800"} ${extra}`.trim();
}

function VehicleTag({ vehicle, route, stationId, setStationId }: VehicleTagProps) {
  const [show, setShow] = useState<Boolean>(route?.routeVisitsStations.some((routeVisitsStation: any) => routeVisitsStation.station == stationId))
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false)

  const sendNotification = async () => {
    setLoading(true);
    try {
      // await route.drivers.map(async (driver: any) => {
      //   //console.log(driver.driverClass)
      //   const res = await fetch("/api/sendNotification", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       expoPushToken: driver.driverClass,
      //       title: "Bạn có chuyến đi mới!",
      //       message: route.id,
      //     }),
      //   });

      //   const data = await res.json();
      //   //console.log(data)
      //   if (data.data.status === 'ok') {
      //     alert("Đã gửi thông báo!");
      //     await api.patch(`/routes/${route.id}/status/WAIT_CF_O/set`)
      //     setDone(true)
      //   }
      //   else alert("Lỗi gửi thông báo");
      // })

      await api.patch(`/routes/${route.id}/status/WAIT_CF_O/set`)
      setDone(true)

    } catch (error) {
      console.error(error);
      alert("Lỗi hệ thống");
    }
    setLoading(false);
  };

  useEffect(() => {
    setShow(route?.routeVisitsStations.some((routeVisitsStation: any) => routeVisitsStation.station == stationId))
  }, [stationId])

  return (
    <div className="bg-gray-200 rounded">
      <div className={`${getStatusClasses(vehicle.status.id)}   w-full p-2 drop-shadow-[1.4px_1.4px_1.4px_rgba(88,88,88,0.4)] rounded-sm flex items-center justify-between`}>
        <button key={vehicle.id}
          onClick={() => setShow(!show)}>
          <div className="bg-[#2C2C2C] rounded-sm text-white px-2 py-1 text-[10px] hover:scale-110 transition-transform duration-200">{vehicle.vehicleRegistrationPlate}</div>
        </button>
        <button onClick={sendNotification} disabled={loading || done}>
          <div className={`${done ? 'bg-gray-400 text-gray-200 bg-opacity-80' : 'bg-cyan-900'} rounded-sm text-white px-2 py-1 text-[10px] hover:scale-110 transition-transform duration-200`}>{loading ? "ĐANG GỬI..." : "PHÂN CÔNG"}</div>
        </button>
      </div>


      {
        show && route && route.drivers?.map((driver: User) => <div className="bg-white m-2 rounded p-2">
          <div>Mã số: {driver.id}</div>
          <div>Tên: {driver.lastname + ' ' + driver.firstname}</div>
          <div>Liên lạc: {driver.phoneNumber}</div>
        </div>)
      }

      {
        show && route && route.routeVisitsStations.map((routeVisitsStation: any) => <button
          className="block w-full"
          onClick={() => routeVisitsStation.station == '1338' ? null : setStationId(routeVisitsStation.station)}>
          <div className={`${routeVisitsStation.station == stationId ? "bg-teal-50 border-2 border-teal-700" : "bg-white"} m-2 rounded p-2`}>
            <div>{routeVisitsStation.station}</div>
            <div className="w-full flex items-center justify-between">
              <div>{format(routeVisitsStation.etd, 'dd _ HH:mm')}</div>
              <div>{format(routeVisitsStation.eta, 'dd _ HH:mm')}</div>
            </div>

            <div className="w-full flex items-center justify-between">
              <div>{format(routeVisitsStation.departuredAt, 'dd _ HH:mm')}</div>
              <div>{format(routeVisitsStation.arrivedAt, 'dd _ HH:mm')}</div>
            </div>
          </div>
        </button>)
      }


    </div >

  )
}

export default VehicleTag