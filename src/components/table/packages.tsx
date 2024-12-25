import DeleteIcon from "@/assets/img/deleteicon"
import DropdownIcon from "@/assets/img/dropdownIcon"
import SortIcon from "@/assets/img/sortIcon"

import { useState } from "react"

const Packages = (props: { packages: Array<any> }) => {
  const [filterTitle, setFilterTitle] = useState<String>('Tên hàng hóa')
  const [showDropdown, setShowDropdown] = useState<Boolean>(false)

  return (
    <div
      className="h-[90dvh] relative flex flex-col gap-4">
      <div className="flex text-sm gap-0.5">
        <button className="flex gap-2 bg-white px-3 py-2 items-center rounded-l hover:bg-gray-100" onClick={() => setShowDropdown(!showDropdown)}>
          <span>{filterTitle}</span>
          <DropdownIcon />
        </button>
        <input className="block bg-white text-sm text-gray-900 px-3 py-2" placeholder="Search" required></input>
        <button className="bg-white px-3 py-2 rounded-r hover:bg-gray-100">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto rounded-md">
        <table className="w-full table-auto bg-white">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block text-sm antialiased font-semibold leading-none">
                  Tên hàng hóa
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <button className="block text-sm antialiased font-semibold leading-none flex gap-2 items-center">
                  <span>Địa chỉ bưu cục nhận hàng</span>
                  <SortIcon />
                </button>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block text-sm antialiased font-semibold leading-none">
                  Người gửi
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block text-sm antialiased font-semibold leading-none">
                  Người nhận
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block text-sm antialiased font-semibold leading-none">
                  Kích thước
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <button className="block text-sm antialiased font-semibold leading-none flex gap-2 items-center">
                  <span>Cập nhật</span>
                  <SortIcon />
                </button>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block text-sm antialiased font-semibold leading-none">
                  Xóa
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {(props.packages ? props.packages.map((p: any, index: number) => {
              return (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                    <span className="text-sm text-blue-gray-900" >
                      {p[0]}
                    </span>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-[#636363] max-w-4">
                    <span className="text-sm text-blue-gray-900" >
                      {p[1]}
                    </span>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                    <span className="text-sm text-blue-gray-900" >
                      {p[2]}
                    </span>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                    <span className="text-sm text-blue-gray-900" >
                      {p[3]}
                    </span>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                    <span className="text-sm text-blue-gray-900" >
                      {`${p[4]}, ${p[5]}, ${p[6]}`}
                    </span>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                    <p className=" text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      23.04.2024
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <a href="#" className=" text-sm antialiased font-semibold leading-normal text-blue-gray-900">
                      <DeleteIcon />
                    </a>
                  </td>
                </tr>
              )
            }) : [])}

          </tbody>
        </table>
      </div>
      {
        showDropdown && (
          <div className="z-20 bg-[#F8F8F8] rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)] absolute top-10 left-0">
            <ul className="text-sm text-gray-700">
              <li className="block px-4 py-2 hover:bg-gray-100">
                Tên hàng hóa
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100">
                Địa chỉ
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100">
                Người gửi
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100">
                Người nhận
              </li>
            </ul>
          </div>
        )
      }
    </div >
  )
}

export default Packages