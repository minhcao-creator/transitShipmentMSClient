"use client"
import Packages from '@/components/table/packages'
import UploadFile from '@/components/form/uploadFile'
import { useState } from 'react'

const PostOffice = () => {

  const [showUpload, setShowUpload] = useState<Boolean>(false)
  const [packages, setPackages] = useState<Array<any>>([])
  return (
    <div className="h-screen mx-5 pt-5">
      <div className="flex justify-between mb-2">
        <p className="font-bold tracking-wider">
          DANH SÁCH KIỆN HÀNG
        </p>
        <button className="rounded bg-[#116A7B] px-4 py-1 text-sm text-white" onClick={() => setShowUpload(!showUpload)}>
          + Thêm tập tin
        </button>
        {showUpload && (
          <div className="absolute top-20 right-0 z-20 w-80">
            <UploadFile setPackages={setPackages} />
          </div>
        )}
      </div>
      <Packages packages={packages} />
    </div>
  );
};

export default PostOffice;
