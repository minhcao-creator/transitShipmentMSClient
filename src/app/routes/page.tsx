"use client";

import dynamic from "next/dynamic";
import axios from 'axios';
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { drivers, postOffices } from "@/driver";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: "green",
};


const Map = dynamic(
  () => import("@/components/Map").then((component) => component.Map),
  { ssr: false }
);

const Routes = () => {
  const [locations, setLocations] = useState<any>(null)
  const [routeList, setRouteList] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<any>(false);

  const [driverShow, setDriverShow] = useState<boolean>(true)

  const handlePlan = async () => {
    setIsLoading(false)
    const response = await axios.post('http://localhost:5000/vrp', locations)
    const routesss = response.data.map((d: any) => {
      const routess = d.map((x: any) => {
        return [locations[x].lat, locations[x].lng]
      })
      return routess
    })
    setRouteList(routesss)
    setIsLoading(true)
  }

  useEffect(() => {
    axios.get('http://localhost:4000/stations')
      .then(function (response) {
        setLocations(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsLoading(true)
  }, [])

  return (
    <div className="flex" >
      < div className="w-full h-screen" >
        {isLoading ? <Map center={{ lng: 106.6087319, lat: 10.8175212 }} locations={locations} routes={routeList} /> : <ClipLoader
          color={'green'}
          loading={!isLoading}
          cssOverride={override}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />}
      </ div>

      {/* <div className="w-1/3 max-h-screen flex flex-col text-sm">
      <div className="flex flex-col gap-3 m-3 h-dvh overflow-y-auto">
        {
          locations?.map((location: any) => {
            return <div className="bg-gray-100 rounded-sm py-1 px-3">
              <span className="truncate block">{location.name}</span>
            </div>
          })
        }
      </div>
      <div className="flex items-center justify-center">
        <button className="text-white text-xs tracking-wider font-semibold py-2 w-11/12 bg-[#306069] hover:bg-[#116A7B] rounded-sm my-2"
          onClick={handlePlan}
        >LẬP KẾ HOẠCH</button>
      </div>
    </div> */}
      <div className="w-5/12 max-h-screen flex text-xs p-3 gap-3">
        <div className="grow flex flex-col">
          <div className="flex items-center justify-center uppercase bg-[#6C4F4B] text-xs font-semibold tracking-wider py-2.5 text-white rounded-t-sm">
            {driverShow ? "DANH SÁCH XE TẢI" : "DANH SÁCH BƯU CỤC"}
          </div>

          {driverShow ? (
            <div className="rounded-b-sm bg-white p-2 flex flex-col gap-3 grow max-h-[100dvh] overflow-y-auto">
              {drivers.map((driver, index) => (
                <button key={index} className="bg-[#F8F8F8] p-2 drop-shadow-[1.4px_1.4px_1.4px_rgba(88,88,88,0.4)] rounded-sm text-xs flex items-center justify-between">
                  <span>{driver.name}</span>
                  <span className="bg-[#2C2C2C] rounded-sm text-white px-2 py-1 text-[10px]">
                    {driver.code}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-b-sm bg-white p-2 flex flex-col gap-3 grow max-h-[100dvh] overflow-y-auto">
              {postOffices.map((location, index) => (
                <button key={index} className="bg-[#F8F8F8] p-2 drop-shadow-[1.4px_1.4px_1.4px_rgba(88,88,88,0.4)] rounded-sm text-xs flex items-center justify-between">
                  <span>{location.name}</span>
                </button>
              ))}
            </div>
          )}

        </div>
        <div className="w-1/4 flex flex-col justify-between">
          <div></div>
          <button className="text-white text-[9px] tracking-wider font-semibold p-1 bg-[#37AB9C] hover:bg-[#116A7B] rounded-sm"
            onClick={handlePlan}
          >LẬP KẾ HOẠCH</button>
        </div>
      </div>
      <button
        className=" text-[10px] font-bold text-white tracking-wider absolute right-0 top-10 bg-[#5C7B69] p-2 rounded-l-md flex flex-col gap-1 items-start w-[72px]"
        onClick={() => setDriverShow(!driverShow)}>
        <span>{driverShow ? "BƯU CỤC" : "XE TẢI"}</span>
        <ChevronLeftIcon width={24} height={24} />
      </button>
    </div >
  )
};

export default Routes;
