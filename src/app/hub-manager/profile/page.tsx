'use client'

import { useAuth } from "@/context/AuthContext/AuthContext";
import { PersonIcon, PlusIcon, UploadIcon } from "@radix-ui/react-icons";
import Link from "next/link";



export default function Profile() {
  const { authState } = useAuth()
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-xl font-bold mb-2">THÔNG TIN CÁ NHÂN</h1>
      <p className="text-gray-400 mb-8">Xin chào Minh Cao</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white mb-4">
        {/* Left card */}
        <div className="bg-cyan-900 bg-opacity-40 rounded-xl p-6 flex flex-col items-center justify-between md:col-span-1">
          <div className="flex flex-col items-center">
            <img
              src="/a.jpg"
              alt="avatar"
              className="w-40 h-40 rounded-full border-4 border-cyan-950 mb-4"
            />
            <h2 className="text-xl font-bold">{authState.user?.username}</h2>
            <span className="text-cyan-100 text-sm">{authState.user?.role}</span>
          </div>

          <Link
            href=""
            className='rounded-sm px-8 py-2 bg-cyan-800 text-white hover:scale-110 transition-transform duration-200'
          >
            <UploadIcon />
          </Link>
        </div>

        {/* Right card */}
        <div className="bg-cyan-900 bg-opacity-40 rounded-xl p-6 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Thông tin chi tiết</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <ProfileField label="Tên người dùng" value={authState.user?.username} />
            <ProfileField label="Quyền" value={authState.user?.role} />

            <ProfileField label="Tên" value={authState.user?.firstname} />
            <ProfileField label="Họ và tên đệm" value={authState.user?.lastname} />

            <ProfileField label="Số điện thoại" value={authState.user?.phoneNumber} />
            <ProfileField label="Số CCCD" value={authState.user?.id} />

            <ProfileField label="Email" value={authState.user?.email} />

            <ProfileField label="Quản lý kho" value={authState.user?.station} />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-white bg-cyan-900 bg-opacity-40 rounded-xl p-8">
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/hub-manager/accounts"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-800 hover:scale-110 transition-transform duration-200"
          >
            <PersonIcon className="w-8 h-8 text-white" />
          </Link>
          <div>Quản lý người dùng</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Link
            href="/hub-manager/accounts"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-800 hover:scale-110 transition-transform duration-200"
          >
            <PersonIcon className="w-8 h-8 text-white" />
          </Link>
          <div>Đổi password</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Link
            href="/hub-manager/accounts"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-800 hover:scale-110 transition-transform duration-200"
          >
            <PersonIcon className="w-8 h-8 text-white" />
          </Link>
          <div>Chỉnh sửa thông tin cá nhân</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Link
            href="/hub-manager/accounts"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-800 hover:scale-110 transition-transform duration-200"
          >
            <PersonIcon className="w-8 h-8 text-white" />
          </Link>
          <div>Đăng xuất</div>
        </div>

      </div>
    </div>
  );
}

const ProfileField = ({ label, value, colSpan }) => (
  <div className={colSpan ? "md:col-span-2" : ""}>
    <span className="block text-gray-200 text-sm">{label}</span>
    <span className="block font-medium">{value}</span>
  </div>
);
