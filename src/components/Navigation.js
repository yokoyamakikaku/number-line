import { useCorrect, useGoNext, useIsAnswered } from '../hooks/app'

const Navigation = () => {
  const isAnswered = useIsAnswered()
  const correct = useCorrect()
  const goNext = useGoNext()

  return isAnswered && (
    <div className="absolute left-0 right-0 bottom-0 h-40 bg-white border-t-2">
      <div className="p-4 flex justify-end items-center h-full">
        <div className="flex-grow pl-4">
          <div className="text-lg mb-2">正解: </div>
          <div className="text-4xl pl-4 font-bold">{correct}</div>
        </div>
        <button className="bg-gray-200 rounded py-4 px-8" onClick={goNext}>
          <div className="text-2xl">つぎへ</div>
        </button>
      </div>
    </div>
  )
}

export default Navigation
