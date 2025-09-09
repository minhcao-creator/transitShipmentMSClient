'use client'

import UploadIcon from '@/assets/img/uploadIcon'

import * as XLSX from 'xlsx';
import { useOrder } from '@/context/OrderStationContext/OrderStationContext';
import { api, useAuth } from '@/context/AuthContext/AuthContext';

const UploadFile = () => {

  const { dispatch } = useOrder()
  const { authState } = useAuth()

  const handleUpLoadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {

    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);

      const ordersSheet = XLSX.utils.sheet_to_json(workbook.Sheets["Orders"]);
      const parcelsSheet = XLSX.utils.sheet_to_json(workbook.Sheets["Parcels"]);
      const itemsSheet = XLSX.utils.sheet_to_json(workbook.Sheets["Items"]);

      const orders: any[] = ordersSheet.map((o: any) => ({
        id: o.id,
        stationId: authState.user?.station,
        weight: o.weight,
        senderName: o.senderName,
        receiverName: o.receiverName,
        receiverAddress: o.receiverAddress,
        senderPhoneNumber: o.senderPhoneNumber,
        receiverPhoneNumber: o.receiverPhoneNumber,
        message: o.message,
        parcels: [],
        status: {
          id: "OrderStatuses001",
          name: "Pending"
        }
      }));

      const parcels: any[] = parcelsSheet.map((p: any) => ({
        id: p.parcelId,
        orderId: p.orderId,
        weight: p.weight,
        width: p.width,
        height: p.height,
        depth: p.depth,
        note: p.note,
        items: []
      }));

      const items: any[] = itemsSheet.map((i: any) => ({
        name: i.itemName,
        quantity: i.quantity,
        note: i.note,
        parcelId: i.parcelId
      }));

      parcels.forEach((parcel) => {
        parcel.items = items.filter((i) => i.parcelId === parcel.id);
      });

      orders.forEach(async (order) => {
        order.parcels = parcels.filter((p) => p.orderId === order.id)
      });

      console.log('orders', orders)

      const res = await api.post('/orders/nested-bulk', orders)

      if (res.data) {
        orders.forEach(async (order) => {
          await api.patch(`orders/${order.id}/status/OrderStatuses001/set`)
          await api.patch(`orders/${order.id}/departure-station/${authState.user?.station}/set`)
        });
      }

      dispatch({ type: 'IMPORT_EXCEL', payload: orders })
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="bg-white text-cyan-950 p-4 rounded shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)] flex flex-col gap-4 items-center text-sm">
      <p className='font-medium'>NHẬP DỮ LIỆU ĐƠN HÀNG</p>
      <label className="flex flex-col items-center justify-center w-full h-40 bg-cyan-950 bg-opacity-10 border border-cyan-950 border rounded cursor-pointer hover:bg-opacity-30">
        <div className="flex flex-col gap-1 items-center justify-center">
          <UploadIcon />
          <p className="mt-2"><span className="font-medium">Nhấp để tải lên</span> hoặc kéo thả tập tin</p>
          <p>Chỉ nhập tập tin dạng excel</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" accept='.xlsx' onChange={handleUpLoadFile} />
      </label>
    </div>
  )
}

export default UploadFile