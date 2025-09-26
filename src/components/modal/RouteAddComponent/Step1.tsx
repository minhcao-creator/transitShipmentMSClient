import DatePickerComponent from '@/components/DatePickerComponent'

type Step1Props = {
  startCode: string,
  endCode: string,
  startedAt: Date,
  endedAt: Date,
  setStartCode: any,
  setEndCode: any,
  setStartedAt: any,
  setEndedAt: any
  currentStep: number,
}

function Step1({
  startCode,
  endCode,
  setStartCode,
  setEndCode,
  currentStep,
  startedAt,
  endedAt,
  setStartedAt,
  setEndedAt }: Step1Props) {

  return (
    <div className='flex w-full items-center gap-24'>
      <div className="flex flex-col gap-1">
        <div className='flex gap-1 items-center'>
          <span className='w-32'>
            Mã đầu vào :
          </span>
          <input
            className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
            placeholder="Nhập mã đầu vào"
            disabled={currentStep != 1}
            value={startCode}
            onChange={e => {
              setStartCode(e.target.value)
            }}
          />
        </div>

        <div className='flex gap-1 items-center'>
          <span className='w-32'>
            Mã đầu ra :
          </span>
          <input
            className='border border-gray-800 p-2 flex-1 rounded-sm focus:outline-1 focus:outline-cyan-800'
            placeholder="Nhập mã đầu vào"
            disabled={currentStep != 1}
            value={endCode}
            onChange={e => setEndCode(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className='flex gap-1 items-center'>
          <span className='w-24'>
            Bắt đầu :
          </span>
          <DatePickerComponent today={startedAt} setToday={setStartedAt} showTime={true} />
        </div>

        <div className='flex gap-1 items-center'>
          <span className='w-24'>
            Kết thúc :
          </span>
          <DatePickerComponent today={endedAt} setToday={setEndedAt} showTime={true} />
        </div>
      </div>

    </div>
  )
}

export default Step1