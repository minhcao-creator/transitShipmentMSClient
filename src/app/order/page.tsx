import Header from '@/components/tableOrder/Header'
import Row from '@/components/tableOrder/Row'
import React from 'react'

function Order() {
  return (
    <div className="h-screen mx-4 pt-4">
      <div className='pb-10'>
        <span className='text-sm font-semibold'>DANH SÁCH ĐƠN HÀNG</span>
      </div>
      <div className='text-xs'>
        <Header />
        <Row />
      </div>
    </div>
  )
}

export default Order