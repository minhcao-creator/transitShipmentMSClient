import UploadIcon from '@/assets/img/uploadIcon'
import DeleteIcon from '@/assets/img/deleteicon'
import { useState } from 'react'

import * as XLSX from 'xlsx';

const UploadFile = (props: { setPackages: any }) => {

  const [file, setFile] = useState<any>()

  const handleChangFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ? e.target.files : [])
    setFile(files[0])
  }

  const handleUpLoadFile = async () => {
    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1
    })
    jsonData.shift()
    props.setPackages(jsonData)
  }

  return (
    <div className="bg-[#F8F8F8] p-4 rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)] flex flex-col gap-4 items-center text-sm">
      <p className='font-semibold'>Upload</p>
      <label className="flex flex-col items-center justify-center w-full h-40 bg-[#D0FCFD] bg-opacity-15 border border-[#088586] border-dashed rounded cursor-pointer hover:bg-opacity-40">
        <div className="flex flex-col items-center justify-center">
          <UploadIcon />
          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-sm text-gray-500">Support format: Only excel</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" accept='.xlsx' onChange={(e) => handleChangFile(e)} />
      </label>
      <div className='w-full flex flex-col gap-2'>
        <p className='font-medium'>Uploading</p>
        <div>
          <div className='text-[11px] px-2 py-1 bg-white flex border border-[#088586] rounded justify-between'>
            <p>{file ? file.name : ''}</p>
            <button>
              <DeleteIcon />
            </button>
          </div>
          <div className="w-full rounded-full mt-[-2px]">
            <div className="bg-[#088586] pt-1 rounded-full w-1/3"></div>
          </div>
        </div>
      </div>
      <button className="rounded bg-[#088586] px-4 py-1 w-full" onClick={handleUpLoadFile}>
        <p className="text-sm text-white font-bold">
          UPLOAD FILE
        </p>
      </button>
    </div>

  )
}

export default UploadFile