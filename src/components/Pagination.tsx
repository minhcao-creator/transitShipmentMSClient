import { useOrder } from "@/context/OrderStationContext/OrderStationContext";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"

type PaginationProps = {
  total: number,
  current: number
}

function Pagination({ total, current }: PaginationProps) {

  const { dispatch } = useOrder()

  const handlePagination = (indexPag: number) => {
    return indexPag > 0 && indexPag < total + 1 ? dispatch({ type: "SET_ORDERS_PAGINATION", payload: indexPag }) : ''
  }

  const show1 = total < 7;
  const show3 = total > 6 && current > 3 && current < total - 2;
  const show2 = total > 6 && (current < 4 || current > (total - 3));

  return (
    <div>
      {show1 && <div className="flex w-full justify-center items-center text-sm mt-4">
        <button onClick={() => handlePagination(current - 1)}>
          <ArrowLeftIcon className="text-gray-700 mx-2 w-5 h-5 hover:text-cyan-500" />
        </button>

        {[...Array(total)].map((_, i) => (
          <button onClick={() => handlePagination(i + 1)} key={i} className={i + 1 === current ? 'border-t-2 border-cyan-600 text-cyan-600 px-4 py-1' : 'text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'}><span>{i + 1}</span></button>
        ))}

        <button onClick={() => handlePagination(current + 1)}>
          <ArrowRightIcon className="text-gray-700 mx-2 w-5 h-5 hover:text-cyan-500" />
        </button>
      </div>}
      {show2 && <div className="flex w-full justify-center items-center m-4 text-sm">
        <button onClick={() => handlePagination(current - 1)}>
          <ArrowLeftIcon className="text-gray-700 mx-2 w-5 h-5 hover:text-cyan-500" />
        </button>

        <button onClick={() => handlePagination(1)} className={1 === current ? 'border-t-2 border-cyan-600 text-cyan-600 px-4 py-1' : 'text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'}><span>1</span></button>
        <button onClick={() => handlePagination(2)} className={2 === current ? 'border-t-2 border-cyan-600 text-cyan-600 px-4 py-1' : 'text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'}><span>2</span></button>
        <button onClick={() => handlePagination(3)} className={3 === current ? 'border-t-2 border-cyan-600 text-cyan-600 px-4 py-1' : 'text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'}><span>3</span></button>

        <span>. . .</span>

        <button onClick={() => handlePagination(total - 2)} className={total - 2 === current ? 'border-t-2 border-cyan-600 text-cyan-600 px-4 py-1' : 'text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'}><span>{total - 2}</span></button>
        <button onClick={() => handlePagination(total - 1)} className={total - 1 === current ? 'border-t-2 border-cyan-600 text-cyan-600 px-4 py-1' : 'text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'}><span>{total - 1}</span></button>
        <button onClick={() => handlePagination(total)} className={total === current ? 'border-t-2 border-cyan-600 text-cyan-600 px-4 py-1' : 'text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'}><span>{total}</span></button>

        <button onClick={() => handlePagination(current + 1)}>
          <ArrowRightIcon className="text-gray-700 mx-2 w-5 h-5 hover:text-cyan-500" />
        </button>
      </div>}
      {
        show3 && <div className="flex w-full justify-center items-center m-4 text-sm">
          <button onClick={() => handlePagination(current - 1)}>
            <ArrowLeftIcon className="text-gray-700 mx-2 w-5 h-5 hover:text-cyan-500" />
          </button>

          <button onClick={() => handlePagination(1)} className='text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'><span>1</span></button>


          <span>. . .</span>

          <button onClick={() => handlePagination(current - 1)} className='text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'><span>{current - 1}</span></button>
          <button className='border-t-2 border-cyan-600 text-cyan-600 px-4 py-1'><span>{current}</span></button>
          <button onClick={() => handlePagination(current + 1)} className='text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'><span>{current + 1}</span></button>

          <span>. . .</span>

          <button onClick={() => handlePagination(total)} className='text-gray-700 px-4 py-1 hover:border-t-2 hover:border-cyan-500 hover:text-cyan-500'><span>{total}</span></button>

          <button onClick={() => handlePagination(current + 1)}>
            <ArrowRightIcon className="text-gray-700 mx-2 w-5 h-5 hover:text-cyan-500" />
          </button>
        </div>
      }
    </div >
  )
}

export default Pagination