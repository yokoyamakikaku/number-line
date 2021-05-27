import Message from './Message'
import Figure from './Figure'
import Inputter from './Inputter'

const Question = () => {
  return (
    <div className="w-full h-full flex flex-col pt-32">
      <Message />
      <Figure />
      <Inputter />
    </div>
  )
}

export default Question
