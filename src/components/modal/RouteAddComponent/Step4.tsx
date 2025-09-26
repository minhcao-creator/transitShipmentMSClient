import DropdownIcon from '@/assets/img/dropdownIcon';
import { api } from '@/context/AuthContext/AuthContext';
import { Station } from '@/types/orderStation';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react'

type Step4Props = {
  currentStep: number,
  stations: Station[] | [{}],
  setStations: any,
}


function Step4({ currentStep, stations, setStations }: Step4Props) {

  const [allStations, setAllStations] = useState<Station[]>([])

  const [showAllStations, setShowAllStations] = useState<boolean>(false)

  const addStation = (index: number) => {
    const newStations = [...stations];
    newStations.splice(index + 1, 0, {}); // thêm sau station hiện tại
    setStations(newStations);
  };

  const removeStation = (index: number) => {
    if (stations.length === 1) return; // không cho xóa hết
    const newStations = [...stations];
    newStations.splice(index, 1);
    setStations(newStations);
  };

  const updateStation = (index: number, value: Station) => {
    const newStations = [...stations];
    newStations[index] = value;
    setStations(newStations);
  };

  useEffect(() => {
    const getStations = async () => {
      const res = await api.get('stations')
      setAllStations(res.data)
    }
    getStations()
  }, [])

  return (
    <div className="max-h-[9rem] overflow-y-auto space-y-2 pr-10">
      {
        stations.map((station, index) => (
          <div key={index} className="flex items-center gap-2">
            <button
              className="w-full flex justify-between bg-white border border-cyan-950 px-3 py-2 items-center rounded-sm"
              onClick={() => setShowAllStations(!showAllStations)}
            >
              <span>{station.id || "Chọn bưu cục"}</span>
              <DropdownIcon />
            </button>
            {showAllStations && (
              <div className="overflow-y-auto overflow-x-hidden max-h-[16rem] text-cyan-950 absolute top-0 right-0 z-10 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
                {allStations.map((station) => (
                  <button
                    key={station.id}
                    className="hover:bg-rose-200 p-2 border rounded m-1"
                    onClick={() => {
                      if (currentStep != 4) return
                      updateStation(index, station)
                      setShowAllStations(false)
                    }}
                  >
                    <span>{station.id}</span>
                  </button>
                ))}
              </div>
            )}
            <div className='flex gap-1'>
              <button
                onClick={() => addStation(index)}
                className="w-8 h-8 flex items-center justify-center rounded bg-cyan-800 text-white"
              >
                <PlusIcon />
              </button>
              <button
                onClick={() => removeStation(index)}
                className="w-8 h-8 flex items-center justify-center rounded bg-rose-800 text-white"
                disabled={stations.length === 1}
              >
                <MinusIcon />
              </button>
            </div>

          </div>
        ))
      }
    </div>
  );
}

export default Step4