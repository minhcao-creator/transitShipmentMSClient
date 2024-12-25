"use client";

import dynamic from "next/dynamic";
import axios from 'axios';
import { useEffect, useState } from "react";

const Map = dynamic(
  () => import("@/components/Map").then((component) => component.Map),
  { ssr: false }
);

const Routes = () => {
  const [locations, setLocations] = useState<any>(null)
  const [routeList, setRouteList] = useState<any>(null)

  const handlePlan = async () => {
    const response = await axios.post('http://localhost:5000/vrp', locations)
    const routesss = response.data.map((d: any) => {
      const routess = d.map((x: any) => {
        return [locations[x].lat, locations[x].lng]
      })
      return routess
    })
    setRouteList(routesss)
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
  }, [])

  return (
    <div className="flex">
      <div className="w-full h-screen">
        <Map center={{ lng: 106.6087319, lat: 10.8175212 }} locations={locations} routes={routeList} />
      </div>

      <div className="w-1/4 max-h-screen flex flex-col text-sm">
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
      </div>
    </div>
  );
};

export default Routes;
