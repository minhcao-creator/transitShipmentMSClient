import DeleteIcon from "@/assets/img/deleteicon"
import EditIcon from "@/assets/img/editIcon"

const Packages = () => {
  return (
    <div
      className="h-full shadow-sm rounded-md">
      <div className="mb-4">
        Tìm kiếm, lọc
      </div>
      <div>
        <table className="w-full text-left table-auto min-w-max bg-white">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Tên hàng hóa
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Địa chỉ bưu cục nhận hàng
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Người gửi
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Người nhận
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Kích thước
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Ngày tạo
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Cập nhật
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Sửa
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100">
                <p className="block font-sans text-sm antialiased font-medium leading-none">
                  Xóa
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Đồ Án
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15/30 đường 59, Phường 14, Gò Vấp
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Cao
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Hoàng
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15,16,16
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <EditIcon />
                </a>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <DeleteIcon />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Đồ Án
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15/30 đường 59, Phường 14, Gò Vấp
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Cao
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Hoàng
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15,16,16
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <EditIcon />
                </a>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <DeleteIcon />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Đồ Án
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15/30 đường 59, Phường 14, Gò Vấp
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Cao
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Hoàng
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15,16,16
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <EditIcon />
                </a>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <DeleteIcon />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Đồ Án
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15/30 đường 59, Phường 14, Gò Vấp
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Cao
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Hoàng
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15,16,16
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <EditIcon />
                </a>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <DeleteIcon />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Đồ Án
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15/30 đường 59, Phường 14, Gò Vấp
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Cao
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Hoàng
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15,16,16
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <EditIcon />
                </a>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <DeleteIcon />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Đồ Án
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15/30 đường 59, Phường 14, Gò Vấp
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Cao
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Hoàng
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15,16,16
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <EditIcon />
                </a>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <DeleteIcon />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Đồ Án
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15/30 đường 59, Phường 14, Gò Vấp
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Cao
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Minh Hoàng
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  15,16,16
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50 text-[#636363]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23.04.2024
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <EditIcon />
                </a>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <DeleteIcon />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Packages