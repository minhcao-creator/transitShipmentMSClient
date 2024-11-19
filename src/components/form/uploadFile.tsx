import UploadIcon from '@/assets/img/uploadIcon'
const UploadFile = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-40 border border-[#088586] border-dashed rounded-md cursor-pointer bg-[#F8F8F8] hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center">
            <UploadIcon />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Support format: Only excel</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>

  )
}

export default UploadFile