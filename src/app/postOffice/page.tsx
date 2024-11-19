"use client"
import Packages from '@/components/table/packages'
import UploadFile from '@/components/form/uploadFile'
import { useState } from 'react'

const HomePage = () => {
  const [showUpload, setShowUpload] = useState<Boolean>(false)
  return (
    <div className="relative">
      <div className="flex justify-between mb-6">
        <p className="font-bold">
          DANH SÁCH KIỆN HÀNG
        </p>
        <button className="rounded-sm bg-[#116A7B] px-4 py-1 text-sm text-white" onClick={() => setShowUpload(!showUpload)}>
          + Thêm tập tin
        </button>
      </div>
      <Packages />
      {showUpload && (
        <div className="absolute top-8 right-0 z-2 w-1/4">
          <UploadFile />
        </div>
      )}
    </div>
  );
};

export default HomePage;
