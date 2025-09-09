import DropdownIcon from '@/assets/img/dropdownIcon';
import { api } from '@/context/AuthContext/AuthContext';
import { Vehicle } from '@/types/routeInit';
import { useEffect, useState } from 'react'

type Step2Props = {
  vehicle: Vehicle | undefined,
  setVehicle: any,
}

function Step2({ vehicle, setVehicle }: Step2Props) {
  const [vehicles, setVehicles] = useState<any[]>([])
  const [showVehicles, setShowVehicles] = useState<boolean>(false)

  useEffect(() => {
    const getVehicle = async () => {
      try {
        const res = await api.get('/vehicles')
        setVehicles(res.data.filter((v: any) => v.status.id == 'VSAVAILABLE'))
      } catch (error) {
        console.log(error)
      }
    }

    getVehicle()
  }, [])

  return (
    <div className="relative pr-8">
      <button
        className="w-full flex justify-between bg-white border border-cyan-950 px-3 py-2 items-center rounded-sm"
        onClick={() => setShowVehicles(!showVehicles)}
      >
        <span>{vehicle?.vehicleRegistrationPlate || "Chọn xe thực hiện chuyến đi"}</span>
        <DropdownIcon />
      </button>
      {showVehicles && (
        <div className="overflow-y-auto max-h-[25rem] text-cyan-950 absolute top-0 right-0 z-10 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
          {vehicles.map((vehicle) => (
            <div>
              <button
                key={vehicle.id}
                className="hover:bg-rose-200 p-2 border rounded m-1"
                onClick={() => {
                  setVehicle(vehicle)
                  setShowVehicles(false)
                }}
              >
                {vehicle.vehicleRegistrationPlate}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Step2