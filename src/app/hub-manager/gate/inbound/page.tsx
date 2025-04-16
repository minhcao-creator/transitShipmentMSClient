import Board from '@/components/boadComponent/BoardInBound'

function Inbound() {
  return (
    <div className='h-screen mx-5 pt-5'>
      <div className='flex justify-between mb-3'>
        <span className='font-bold'>NHẬP HÀNG</span>
        <button>tim kiem</button>
      </div>
      <Board />
    </div>

  )
}

export default Inbound