import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react'
import HorizontalScroll from './HorizontalScroll';
import { useUser } from '@/context/UserContext/UserContext';
import { User } from '@/types/user';
import DropdownIcon from '@/assets/img/dropdownIcon';

type Step3Props = {
  drivers: User[] | [{}],
  setDrivers: any,
  currentStep: number
}


function Step3({ currentStep, drivers, setDrivers }: Step3Props) {

  const { userState } = useUser()

  const [allDrivers, setAllDrivers] = useState<User[]>(userState.filter((u: User) => u.role.id === '0003'))

  const [showAllDrivers, setShowAllDrivers] = useState<boolean>(false)

  const adddriver = (index: number) => {
    const newdrivers = [...drivers];
    newdrivers.splice(index + 1, 0, {}); // thêm sau driver hiện tại
    setDrivers(newdrivers);
  };

  const removedriver = (index: number) => {
    if (drivers.length === 1) return; // không cho xóa hết
    const newdrivers = [...drivers];
    newdrivers.splice(index, 1);
    setDrivers(newdrivers);
  };

  const updatedriver = (index: number, value: User) => {
    const newdrivers = [...drivers];
    newdrivers[index] = value;
    setDrivers(newdrivers);
  };

  return (
    <HorizontalScroll>
      {
        drivers?.map((driver, index) => (
          <div key={index} className="flex items-center gap-2">
            <button
              className="w-full flex justify-between bg-white border border-cyan-950 px-3 py-2 items-center rounded-sm"
              onClick={() => setShowAllDrivers(!showAllDrivers)}
            >
              <span>{driver.id || "Chọn tài xế"}</span>
              <DropdownIcon />
            </button>
            {showAllDrivers && (
              <div className="overflow-y-auto overflow-x-hidden max-h-[16rem] text-cyan-950 absolute top-0 right-0 z-10 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
                {allDrivers.map((driver) => (
                  <div>
                    <button
                      key={driver.id}
                      className="hover:bg-rose-200 p-2 border rounded m-1"
                      onClick={() => {
                        if (currentStep != 3) return
                        updatedriver(index, driver)
                        setShowAllDrivers(false)
                      }}
                    >
                      <span>{driver.id}</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
            {currentStep == 3 ?
              <div className='flex gap-1'>
                <button
                  onClick={() => adddriver(index)}
                  className="w-8 h-8 flex items-center justify-center rounded bg-cyan-800 text-white"
                >
                  <PlusIcon />
                </button>
                <button
                  onClick={() => removedriver(index)}
                  className="w-8 h-8 flex items-center justify-center rounded bg-rose-800 text-white"
                  disabled={drivers.length === 1}
                >
                  <MinusIcon />
                </button></div> : ''}
          </div>
        ))
      }
    </HorizontalScroll>
  );
}

export default Step3