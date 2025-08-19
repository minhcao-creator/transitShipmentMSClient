import { useState } from "react"

type LocalTagProps = {
  localName: string,
  orders: []
}


function LocalTag({ localName, orders }: LocalTagProps) {
  const [show, setShow] = useState<Boolean>(false)

  return (
    <div className="bg-gray-200 rounded-b">
      <button key={localName} className="bg-[#F8F8F8] p-3 drop-shadow-[1.4px_1.4px_1.4px_rgba(88,88,88,0.4)] rounded-sm text-sm flex items-center justify-between"
        onClick={() => setShow(!show)}>
        <span>{localName}</span>
      </button>
      {show && <div>
        {orders.map((order: any) => <div className="p-2">
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