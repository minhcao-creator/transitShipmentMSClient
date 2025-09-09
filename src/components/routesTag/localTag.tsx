import { useEffect, useState } from "react"
import { Order, Station } from "@/types/orderStation";

type LocalTagProps = {
  groupedOrder: {
    stationId: string;
    station: Station | undefined;
    orders: Order[];
  },
  stationId: string,
  setStationId: any
}


function LocalTag({ groupedOrder, stationId, setStationId }: LocalTagProps) {

  const [show, setShow] = useState<Boolean>(groupedOrder.stationId == stationId)

  useEffect(() => {
    setShow(groupedOrder.stationId == stationId)
  }, [stationId])

  return (
    <div className="bg-gray-200 rounded-b">
      <button key={groupedOrder.stationId} className="bg-[#F8F8F8] p-3 drop-shadow-[1.4px_1.4px_1.4px_rgba(88,88,88,0.4)] rounded-sm text-sm flex items-center justify-between"
        onClick={() => {
          setShow(!show)
          setStationId(groupedOrder.stationId)
        }}>
        <span>{groupedOrder.station?.name}</span>
      </button>
      {show && <div>
        {groupedOrder.orders.map((order: any) => <div className="p-2">
          <div>
            {order.id}
          </div>
          <div className="pl-6">
            {order.parcels.map((parcel: any) => <div className="flex items-center gap-4 py-1">
              <div>{parcel.depth}</div>
              <div>{parcel.height}</div>
              <div>{parcel.width}</div>
              <div>w: {parcel.weight}</div>
              <div>{parcel.id}</div>
            </div>)}
          </div>
        </div>)}
      </div>}
    </div>

  )
}

export default LocalTag