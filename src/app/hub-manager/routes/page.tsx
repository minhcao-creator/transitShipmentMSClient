"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, DoubleArrowDownIcon, DoubleArrowUpIcon, PlusIcon } from "@radix-ui/react-icons";
import { api } from "@/context/AuthContext/AuthContext";
import { useOrder } from "@/context/OrderStationContext/OrderStationContext";
import { useRouter } from "next/navigation";
import LocalTag from "@/components/routesTag/localTag";
import { Order, Station } from "@/types/orderStation";
import { Vehicle } from "@/types/routes";
import VehicleTag from "@/components/routesTag/vehicleTag";
import BoardRoute from "@/components/boadComponent/BoardRoute";
import { useBoard } from "@/context/RouteContext/RouteContext";
import RouteAdd from "@/components/modal/RouteAdd";
import { TransitOrderGroupBy } from "@/types/routeInit";


const MapRoutes = dynamic(
  () => import("@/components/Map").then((component) => component.Map),
  { ssr: false }
);

const Routes = () => {
  const [allLocations, setAllLocations] = useState<any>([])
  const [locations, setLocations] = useState<any[]>([])
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [routeList, setRouteList] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<any>(false)
  const [stationId, setStationId] = useState<string>('')
  const [modeButton, setModeButton] = useState<boolean>(true)
  const [heightFull, setHeightFull] = useState<boolean>(false)
  const [modeShowRoute, setModeShowRoute] = useState<boolean>(false)

  const [showModal, setShowModal] = useState<boolean>(false)

  const [driverShow, setDriverShow] = useState<boolean>(true)
  const [mapKey, setMapKey] = useState(0);

  const router = useRouter()

  const [transitToOrders, setTransitToOrders] = useState<TransitOrderGroupBy[]>([])

  const { orderState } = useOrder()

  // const newOrderState = orderState.orders.filter((order) => order.status?.name === 'Pending')

  // const groupedOrders: Record<string, { stationId: string; station: Station | undefined; orders: Order[] }>
  //   = newOrderState.reduce((acc: any, order) => {
  //     const stationId = order.departureStation?.id || '';
  //     const station = order.departureStation;
  //     if (!acc[stationId]) {
  //       acc[stationId] = { stationId, station, orders: [] };
  //     }
  //     acc[stationId].orders.push(order);
  //     return acc;
  //   }, {});

  // const groupedOrderList = Object.values(groupedOrders);

  const groupTransitOrdersWithOrders = async () => {
    try {
      if (orderState.orders.length === 0) return;

      const transitOrders = (await api.get("/transit-orders")).data.filter((tto: any) => tto.status.id == "TTOStatuses001");

      const orderMap = new Map<string, Order>(
        orderState.orders.map((o) => [o.id, o])
      );

      const result: TransitOrderGroupBy[] = [];

      for (const to of transitOrders) {
        const { departureStation, arrivalStation } = to;

        const fullOrders: Order[] = (to.orders || [])
          .map((o: any) => orderMap.get(o.id))
          .filter((o: any): o is Order => !!o);

        if (departureStation.id !== "1338" && arrivalStation.id === "1338") {
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

        if (arrivalStation.id !== "1338" && departureStation.id === "1338") {
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



  const { boardState, dispatch } = useBoard()

  const handlePlan = () => {
    setModeShowRoute(!modeShowRoute)
    // setIsLoading(false)
    // const routelist = Object.values(boardState.columns);
    // setRouteList(routelist)
    // setIsLoading(true)
  }

  const vehicleRefs = useRef(new Map<string, HTMLDivElement>());
  const localRefs = useRef(new Map<string, HTMLDivElement>());

  useEffect(() => {
    try {

      api.get('/stations')
        .then(function (response) {
          setAllLocations(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

      api.get('/vehicles')
        .then(function (response) {
          setVehicles(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

      setIsLoading(true)
    } catch (error) {
      console.log(error)
      router.push('/logout')
    }
  }, [])

  useEffect(() => {
    if (!stationId) return;
    const targetVehicle = vehicles.find((vehicle) => {
      const route = Object.values(boardState.columns)?.find((route) => route.vehicle.id === vehicle.id);
      return route?.routeVisitsStations.some((routeVisitsStation: any) => routeVisitsStation.station == stationId);
    });

    if (targetVehicle) {
      const targetRef = vehicleRefs?.current?.get(targetVehicle.id);
      if (targetRef) {
        targetRef.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    const targetRef = localRefs.current?.get(stationId);
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [stationId, vehicles, routeList]);

  useEffect(() => {
    groupTransitOrdersWithOrders()
  }, [orderState])

  useEffect(() => {
    const locations = allLocations.map((loc: any) => { return { id: loc.id, name: loc.name, lat: loc.latitude, lng: loc.longtitude, haveOrder: !!transitToOrders.some(g => g.id == loc.id) } });
    setLocations(locations)
  }, [allLocations, transitToOrders])

  useEffect(() => {
    console.log(mapKey)
    setMapKey(prevKey => prevKey + 1)
  }, [modeButton]);

  useEffect(() => {
    const routelist = Object.values(boardState.columns);
    setRouteList(routelist)
  }, [boardState])

  if (locations.length == 0) return

  return (
    <div className={modeButton ? 'flex w-full' : 'relative w-full'} >
      <div className={modeButton ? 'w-full' : 'relative z-0 w-full'}>
        <MapRoutes key={mapKey} center={{ lng: 106.6087319, lat: 10.8175212 }} locations={locations} routes={routeList} setStationId={setStationId} stationId={stationId} modeShowRoute={modeShowRoute} />
      </ div>
      {modeButton ?
        <div className="w-5/12 max-h-screen flex text-sm p-3 gap-3">
          <div className="grow flex flex-col">
            <div className="flex items-center justify-between bg-[#6C4F4B] text-xs font-semibold tracking-wider p-3 text-white rounded-t-sm">
              <div>
                {driverShow ? "DANH SÁCH XE TẢI" : "DANH SÁCH BƯU CỤC"}
              </div>
              <button className="bg-cyan-900 rounded-sm text-white px-2 py-1 text-[10px]">PHÂN CÔNG</button>
            </div>

            {driverShow ? (
              <div className="rounded-b-sm bg-white p-2 flex flex-col gap-3 grow max-h-[100dvh] overflow-y-auto">
                {vehicles.map((vehicle) => {
                  const route = routeList?.find((route: any) => route.vehicle.id === vehicle.id);

                  return (
                    <div
                      key={vehicle.id}
                      ref={(el) => {
                        if (el) vehicleRefs?.current?.set(vehicle.id, el);
                      }}
                    >
                      <VehicleTag vehicle={vehicle} stationId={stationId} route={route} setStationId={setStationId} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-b-sm bg-white p-2 flex flex-col gap-3 grow max-h-[100dvh] overflow-y-auto">
                {transitToOrders.map((groupedOrder: any) => (
                  <div
                    key={groupedOrder.id}
                    ref={(el) => {
                      if (el) localRefs?.current?.set(groupedOrder.id, el);
                    }}
                  >
                    <LocalTag groupedOrder={groupedOrder} stationId={stationId} setStationId={setStationId} />
                  </div>
                ))}
              </div>
            )}

          </div>
          <div className="w-1/4 flex flex-col justify-between">
            <div></div>
            <div className="flex flex-col gap-4 w-full">
              {modeButton ?
                <button className="text-white text-[9px] tracking-wider font-semibold p-1 bg-[#37AB9C] hover:bg-[#116A7B] rounded-sm"
                  onClick={handlePlan}
                >LẬP KẾ HOẠCH</button>
                :
                <button className="text-white text-[9px] tracking-wider font-semibold p-1 bg-yellow-700 hover:bg-yellow-800 rounded-sm"
                  onClick={() => { }}
                >CHỈNH SỬA</button>
              }
            </div>

          </div>
        </div>
        :
        <div className={`transition-all duration-1000 overflow-hidden z-30 absolute left-0 bottom-0 p-2 w-full flex flex-col items-end justify-start p-4 gap-2 ${heightFull ? 'h-screen' : 'h-80'} `}>
          <div className="w-full flex justify-end items-center gap-4">
            <button onClick={() => setShowModal(!showModal)} className="text-white bg-teal-800 flex items-center gap-2 px-2 p-1 rounded hover:bg-teal-700">
              <PlusIcon className="size-5" />
              <span className="text-sm">Tạo chuyến đi mới</span>
            </button>
            <button onClick={() => setHeightFull(!heightFull)} className="bg-gray-400 p-1 rounded">
              {heightFull ? <DoubleArrowDownIcon className="size-5" /> : <DoubleArrowUpIcon className="size-5" />}
            </button>
          </div>
          <div className="w-full bg-gray-900 rounded p-2 h-dvh bg-opacity-20">
            <BoardRoute heightFull={heightFull} />
          </div>
        </div>
      }
      {modeButton &&
        <button
          className="z-20 text-[10px] font-bold text-white tracking-wider absolute right-0 top-10 bg-[#5C7B69] p-2 rounded-l-md flex flex-col gap-1 items-start w-[72px]"
          onClick={() => setDriverShow(!driverShow)}>
          <span>{driverShow ? "BƯU CỤC" : "XE TẢI"}</span>
          <ChevronLeftIcon width={24} height={24} />
        </button>
      }

      <button
        className="z-20 text-[10px] font-bold text-white tracking-wider absolute right-0 top-40 bg-[#5C7B69] p-2 rounded-l-md flex flex-col gap-1 items-start w-[72px]"
        onClick={() => setModeButton(!modeButton)}>
        <span>{modeButton ? "EDIT" : "ALNS"}</span>
        <ChevronLeftIcon width={24} height={24} />
      </button>

      {showModal && <RouteAdd setShowModal={() => setShowModal(false)} />}

    </div >
  )
};

export default Routes;
