import { useOrder } from '@/context/OrderContext/OrderContext'
import { Package } from '@/types/order'
import { Cross1Icon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

type PackageEditProps = {
  packageData: Package
  setShowModal: () => void
}

function PackageEdit({ packageData, setShowModal }: PackageEditProps) {
  const { dispatch } = useOrder()

  const [weightEdit, setWeightEdit] = useState<number>(packageData.weight)
  const [lengthEdit, setLenghtEdit] = useState<number>(packageData.length)
  const [widthEdit, setWidthEdit] = useState<number>(packageData.width)
  const [heightEdit, setHeightEdit] = useState<number>(packageData.height)
  const [noteEdit, setNoteEdit] = useState<string>(packageData.note)
  const [typeEdit, setTypeEdit] = useState<string>(packageData.type)
  const [statusEdit, setStatusEdit] = useState<string>(packageData.status)

  const handleUpdate = (packageDataEdit: Package) => {
    setShowModal()
    dispatch({ type: "EDIT_PACKAGE", payload: packageDataEdit })
  }

  const handleReset = () => {
    setWeightEdit(packageData.weight)
    setLenghtEdit(packageData.length)
    setWidthEdit(packageData.width)
    setHeightEdit(packageData.height)
    setNoteEdit(packageData.note)
    setTypeEdit(packageData.type)
    setStatusEdit(packageData.status)
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
                  {packageData.id}
                </span>
              </div>
              <div className='flex flex-col gap-1'>
                <span >
                  Cân nặng
                </span>
                <input
                  type={"number"}
                  className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                  value={weightEdit}
                  onChange={(e) => setWeightEdit(Number(e.target.value))} />
              </div>
            </div>
            <div className='flex-1 flex flex-col gap-3'>

              <div className='flex flex-col gap-1'>
                <span >
                  Loại bưu kiện
                </span>
                <input
                  className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                  value={typeEdit}
                  onChange={(e) => setTypeEdit(e.target.value)} />
              </div>

              <div className='flex flex-col gap-1'>
                <span >
                  Chiều dài
                </span>
                <input
                  type={"number"}
                  className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                  value={lengthEdit}
                  onChange={(e) => setLenghtEdit(Number(e.target.value))} />
              </div>

            </div>
            <div className='flex-1 flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <span >
                  Trạng thái bưu kiện
                </span>
                <input
                  className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                  value={statusEdit}
                  onChange={(e) => setStatusEdit(e.target.value)} />
              </div>

              <div className='flex flex-col gap-1'>
                <span >
                  Chiều rộng
                </span>
                <input
                  type={"number"}
                  className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                  value={widthEdit}
                  onChange={(e) => setWidthEdit(Number(e.target.value))} />
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
                value={heightEdit}
                onChange={(e) => setHeightEdit(Number(e.target.value))} />
            </div>

            <div className='flex flex-col gap-1 grow'>
              <span >
                Lời nhắn
              </span>
              <textarea
                rows={1}
                className='border border-neutral-400 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-slate-400'
                value={noteEdit}
                onChange={(e) => setNoteEdit(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <button className='border border-rose-600 text-rose-600 rounded-sm px-4 py-1.5 hover:bg-rose-600 hover:text-white'
            onClick={handleReset}>
            RESET
          </button>
          <button className='border border-teal-600 text-teal-600 rounded-sm px-4 py-1.5 hover:bg-teal-600 hover:text-white'
            onClick={() => handleUpdate({
              ...packageData,
              weight: weightEdit,
              length: lengthEdit,
              width: widthEdit,
              height: heightEdit,
              note: noteEdit,
              type: typeEdit,
              status: statusEdit,

            })}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackageEdit