import { api } from '@/context/AuthContext/AuthContext'
import { useOrder } from '@/context/OrderContext/OrderContext'
import { Parcels } from '@/types/orderLocal'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type PackageAddProps = {
  idOrder: string,
  parcelData: Parcels
  setShowModal: () => void
}

function PackageAdd({ idOrder, parcelData, setShowModal }: PackageAddProps) {
  const { dispatch } = useOrder()
  const router = useRouter()

  const [weightAdd, setWeightAdd] = useState<number>(parcelData.weight)
  const [depthAdd, setDepthAdd] = useState<number>(parcelData.depth)
  const [widthAdd, setWidthAdd] = useState<number>(parcelData.width)
  const [heightAdd, setHeightAdd] = useState<number>(parcelData.height)
  const [noteAdd, setNoteAdd] = useState<string>(parcelData.note)

  const handleUpdate = async (parcelDataAdd: Parcels) => {
    try {
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
        }
      }
    } catch (error) {
      console.log(error)
      router.push('/logout')
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
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-800 bg-opacity-80 flex items-center justify-center'>
      <div className='p-8 w-1/2 bg-white rounded flex flex-col gap-8'>

        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='text-sm pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              THÔNG TIN BƯU KIỆN
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-8 justify-between'>
            <div className='flex-1 flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <span >
                  Mã bưu kiện
                </span>
                <span className='border border-neutral-400 p-2 flex-1 rounded-sm bg-neutral-200'>
                  {parcelData.id}
                </span>
              </div>
              <div className='flex flex-col gap-1'>
                <span >
                  Cân nặng
                </span>
                <input
                  type={"number"}
                  className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                  value={weightAdd}
                  onChange={(e) => setWeightAdd(Number(e.target.value))} />
              </div>
            </div>
            <div className='flex-1 flex flex-col gap-3'>

              <div className='flex flex-col gap-1'>
                <span >
                  Chiều dài
                </span>
                <input
                  type={"number"}
                  className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                  value={depthAdd}
                  onChange={(e) => setDepthAdd(Number(e.target.value))} />
              </div>

            </div>
            <div className='flex-1 flex flex-col gap-3'>

              <div className='flex flex-col gap-1'>
                <span >
                  Chiều rộng
                </span>
                <input
                  type={"number"}
                  className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                  value={widthAdd}
                  onChange={(e) => setWidthAdd(Number(e.target.value))} />
              </div>
            </div>
          </div>
          <div className='flex items-start gap-8 justify-between'>
            <div className='flex flex-col gap-1 basic-[1/33]'>
              <span >
                Chiều cao
              </span>
              <input
                type={"number"}
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={heightAdd}
                onChange={(e) => setHeightAdd(Number(e.target.value))} />
            </div>

            <div className='flex flex-col gap-1 grow'>
              <span >
                Lời nhắn
              </span>
              <textarea
                rows={1}
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={noteAdd}
                onChange={(e) => setNoteAdd(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <button className='border border-rose-600 text-rose-600 rounded-sm px-4 py-1.5 hover:bg-rose-600 hover:text-white'
            onClick={handleReset}>
            ĐẶT LẠI
          </button>
          <button className='border border-teal-600 text-teal-600 rounded-sm px-4 py-1.5 hover:bg-teal-600 hover:text-white'
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
    </div>
  )
}

export default PackageAdd