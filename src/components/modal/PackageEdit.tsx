import { useOrder } from '@/context/OrderStationContext/OrderStationContext'
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

  const [open, setOpen] = useState<boolean>(false)

  const parcelTypes = [
    {
      id: "fragile",
      name: "Hàng dễ vỡ"
    },
    {
      id: "bulky",
      name: "Hàng cồng kềnh"
    },
    {
      id: "perishable",
      name: "Hàng dễ hỏng"
    },
    {
      id: "liquid",
      name: "Chất lỏng"
    },
    {
      id: "valuable",
      name: "Hàng giá trị cao"
    },
    {
      id: "documents",
      name: "Tài liệu/giấy tờ"
    },
    {
      id: "electronics",
      name: "Thiết bị điện tử"
    },
    {
      id: "flammable",
      name: "Hàng dễ cháy nổ"
    },
    {
      id: "oversize",
      name: "Hàng quá khổ"
    },
    {
      id: "normal",
      name: "Hàng thông thường"
    }
  ]

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
    <div className='absolute top-0 left-0 h-screen w-full bg-neutral-900 bg-opacity-90 flex items-center justify-center'>
      <div className='p-8 w-1/2 bg-white rounded flex flex-col gap-8'>
        <div className='flex gap-4'>
          <div className='flex-1 flex justify-center'>
            <span className='font-bold text-lg pb-2 tracking-wider border-b-2 border-neutral-500 mr-[-30px]'>
              KIỆN HÀNG : {packageData.id}
            </span>
          </div>
          <button onClick={setShowModal} className='w-4 h-4'>
            <Cross1Icon />
          </button>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex items-start justify-between'>
            <div className='flex flex-col gap-1'>
              <span >
                Cân nặng
              </span>
              <input
                type={"number"}
                className='w-20 border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
                value={weightEdit}
                onChange={(e) => setWeightEdit(Number(e.target.value))} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Chiều dài
              </span>
              <input
                type={"number"}
                className='w-20 border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
                value={lengthEdit}
                onChange={(e) => setLenghtEdit(Number(e.target.value))} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Chiều rộng
              </span>
              <input
                type={"number"}
                className='w-20 border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
                value={widthEdit}
                onChange={(e) => setWidthEdit(Number(e.target.value))} />
            </div>

            <div className='flex flex-col gap-1'>
              <span >
                Chiều cao
              </span>
              <input
                type={"number"}
                className='w-20 border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
                value={heightEdit}
                onChange={(e) => setHeightEdit(Number(e.target.value))} />
            </div>

            <div className='relative flex flex-col gap-1 w-48'>
              <span >
                Loại bưu kiện
              </span>
              <div
                className="border border-gray-800 p-2 rounded-sm cursor-pointer bg-white"
                onClick={() => setOpen(!open)}
              >
                {typeEdit || 'Chọn loại bưu kiện'}
              </div>
              {open && (
                <div className="absolute top-16 h-48 overflow-y-auto z-10 bg-white border rounded-sm w-full mt-1 shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)]">
                  {parcelTypes.map((p) => (
                    <div
                      key={p.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setTypeEdit(p.name)
                        setOpen(false)
                      }}
                    >
                      {p.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='flex items-start gap-8 justify-between'>
            <div className='flex flex-col gap-1 grow'>
              <span >
                Lời nhắn
              </span>
              <textarea
                rows={1}
                className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
                value={noteEdit}
                onChange={(e) => setNoteEdit(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end w-full mt-8'>
          {/* <button className='border border-rose-600 text-rose-600 rounded-sm px-4 py-1.5 hover:bg-rose-600 hover:text-white'
            onClick={handleReset}>
            RESET
          </button> */}
          <button className='rounded-sm px-8 py-2 bg-cyan-800 text-white hover:scale-110 transition-transform duration-200'
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
            CHỈNH SỬA
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackageEdit