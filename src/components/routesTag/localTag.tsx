import { useEffect, useState } from "react"
import { TransitOrderGroupBy } from "@/types/routeInit";

type LocalTagProps = {
  groupedOrder: TransitOrderGroupBy,
  stationId: string,
  setStationId: any
}


function LocalTag({ groupedOrder, stationId, setStationId }: LocalTagProps) {

  const [show, setShow] = useState<Boolean>(groupedOrder.id == stationId)

  useEffect(() => {
    setShow(groupedOrder.id == stationId)
  }, [stationId])

  return (
    <div className="bg-gray-200 rounded-b">
      <button key={groupedOrder.id} className="bg-[#F8F8F8] p-3 drop-shadow-[1.4px_1.4px_1.4px_rgba(88,88,88,0.4)] rounded-sm text-sm flex items-center justify-between"
        onClick={() => {
          setShow(!show)
          setStationId(groupedOrder.id)
        }}>
        <span>{groupedOrder.name}</span>
      </button>
      {show && <div className="">
        {groupedOrder.transitOrders.map((order: any) => <div className={`${order.type == 'departure' ? 'bg-green-50' : 'bg-rose-50'} p-2 m-2 rounded-sm`}>
          <div>
            {order.id}
          </div>
          <div className="pl-4">{
            order.orders.map((o: any) => <div>
              <div>{o.id}</div>
              {o.parcels.map((parcel: any) => <div className="flex items-center gap-4 py-1 pl-2">
                <div>{parcel.depth}</div>
                <div>{parcel.height}</div>
                <div>{parcel.width}</div>
                <div>w: {parcel.weight}</div>
                <div>{parcel.id}</div>
              </div>)}
            </div>)}

          </div>
        </div>)}
      </div>}
    </div>

  )
}

export default LocalTag