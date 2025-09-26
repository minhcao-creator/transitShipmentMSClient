import { api } from '@/context/AuthContext/AuthContext'
import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
import { Parcels } from '@/types/orderLocal'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import AlertComponent from '../AlertComponent'

type PackageAddProps = {
  idOrder: string,
  parcelData: Parcels
  setShowModal: () => void
}

function PackageAdd({ idOrder, parcelData, setShowModal }: PackageAddProps) {
  const { dispatch } = useOrder()

  const [weightAdd, setWeightAdd] = useState<number>(parcelData.weight)
  const [depthAdd, setDepthAdd] = useState<number>(parcelData.depth)
  const [widthAdd, setWidthAdd] = useState<number>(parcelData.width)
  const [heightAdd, setHeightAdd] = useState<number>(parcelData.height)
  const [noteAdd, setNoteAdd] = useState<string>(parcelData.note)

  const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);

  const handleUpdate = async (parcelDataAdd: Parcels) => {
    try {

      if (weightAdd <= 0) {
        setAlert({ type: "error", message: "Vui lòng nhập cân nặng lớn hơn 0" });
        return;
      }
      if (depthAdd <= 0) {
        setAlert({ type: "error", message: "Vui lòng nhập chiều dài lớn hơn 0" });
        return;
      }
      if (widthAdd <= 0) {
        setAlert({ type: "error", message: "Vui lòng nhập chiều rộng lớn hơn 0" });
        return;
      }
      if (heightAdd <= 0) {
        setAlert({ type: "error", message: "Vui lòng nhập chiều cao lớn hơn 0" });
        return;
      }

      const res1 = await api.post('/parcels', {
        ...parcelDataAdd
      })
      if (res1.data) {
        const res2 = await api.patch(`/orders/${idOrder}/parcels/${parcelDataAdd.id}/add`)
        if (res2.data) {
          dispatch({
            type: "ADD_PARCEL", payload: {
              idOrder,
              parcelData: parcelDataAdd
            }
          })
          setShowModal()
          setAlert({ type: "success", message: "Thêm bưu kiện thành công" })
        }
      }
    } catch (error) {
      console.log(error)
      // router.push('/logout')
    }
  }

  const handleReset = () => {
    setWeightAdd(parcelData.weight)
    setDepthAdd(parcelData.depth)
    setWidthAdd(parcelData.width)
    setHeightAdd(parcelData.height)
    setNoteAdd(parcelData.note)
  }

  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-900 bg-opacity-90 flex items-center justify-center'>
      <div className='p-8 bg-white min-w-[34rem] rounded flex flex-col gap-8'>

        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='font-bold text-lg pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              BƯU KIỆN : {parcelData.id}
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex justify-between gap-8 '>
            <div className='flex-1 flex flex-col gap-3'>

              <div className='relative flex justify-between items-center'>
                <span >
                  Cân nặng :
                </span>
                <input
                  type={"number"}
                  className='w-32 border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800'
                  value={weightAdd}
                  onChange={(e) => setWeightAdd(Number(e.target.value))} />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600">
                  gram
                </span>
              </div>

              <div className='relative flex justify-between items-center'>
                <span >
                  Chiều dài :
                </span>
                <input
                  type={"number"}
                  className='w-32 border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800'
                  value={depthAdd}
                  onChange={(e) => setDepthAdd(Number(e.target.value))} />
                <span className="absolute left-32 top-1/2 -translate-y-1/2 text-gray-600">
                  centimet
                </span>
              </div>

            </div>

            <div className='flex-1 flex flex-col gap-3'>

              <div className='relative flex justify-between items-center'>
                <span >
                  Chiều rộng :
                </span>
                <input
                  type={"number"}
                  className='w-32 border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800'
                  value={widthAdd}
                  onChange={(e) => setWidthAdd(Number(e.target.value))} />
                <span className="absolute left-32 top-1/2 -translate-y-1/2 text-gray-600">
                  centimet
                </span>
              </div>

              <div className='relative flex justify-between items-center'>
                <span >
                  Chiều cao :
                </span>
                <input
                  type={"number"}
                  className='w-32 border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800'
                  value={heightAdd}
                  onChange={(e) => setHeightAdd(Number(e.target.value))} />
                <span className="absolute left-32 top-1/2 -translate-y-1/2 text-gray-600">
                  centimet
                </span>
              </div>

            </div>
          </div>
          <div className='flex gap-1 items-center'>
            <span >
              Lời nhắn :
            </span>
            <textarea
              rows={1}
              className='border border-gray-800 p-2 rounded-sm focus:outline-1 focus:outline-cyan-800 flex-1'
              value={noteAdd}
              onChange={(e) => setNoteAdd(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className='flex items-center justify-end'>
          {/* <button className='border border-rose-600 text-rose-600 rounded-sm px-4 py-1.5 hover:bg-rose-600 hover:text-white'
            onClick={handleReset}>
            ĐẶT LẠI
          </button> */}
          <button className='rounded-sm px-8 py-2 bg-cyan-800 text-white hover:scale-110 transition-transform duration-200'
            onClick={() => handleUpdate({
              ...parcelData,
              weight: weightAdd,
              depth: depthAdd,
              width: widthAdd,
              height: heightAdd,
              note: noteAdd

            })}
          >
            THỰC HIỆN
          </button>
        </div>
      </div>

      {
        alert && (
          <AlertComponent
            type={alert?.type}
            message={alert?.message}
            onClose={() => setAlert(null)}
          />
        )
      }

    </div>
  )
}

export default PackageAdd