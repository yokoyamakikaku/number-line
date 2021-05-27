import { useAnswer, useQuestion } from '../../hooks/app'

const Option = ({ value }) => {
  const answer = useAnswer(value)

  return (
    <button className="w-32 flex items-center justify-center mx-2 border-4 rounded" onClick={answer}>
      <div className="text-3xl">{value}</div>
    </button>
  )
}

const Inputter = () => {
  const { options } = useQuestion()
  return (
    <div className="flex justify-center px-4 h-40 pb-4">
    {options.map((value, i) =>
      <Option key={i} value={value} />
    )}
  </div>
  )
}

export default Inputter
