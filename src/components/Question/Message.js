import { useMemo } from 'react'
import { useAnswered, useCorrect } from '../../hooks/app'

const Message = () => {
  const answered = useAnswered()
  const correct = useCorrect()

  const content = useMemo(() => {
    if (answered === null) return <OrderMessage />
    if (answered === correct) return <PraiseMessage />
    return <EncourageMessage />
  }, [correct, answered])

  return (
    <div className="text-center text-4xl p-4">
      {content}
    </div>
  )
}

export const OrderMessage = () => (
  <>
    <span className="w-8 h-8 mb-1 inline-block mr-1 border-black border-2 align-middle" />に入る数字を選んでください
  </>
)

export const PraiseMessage = () => (
  <>
    🎉 おめでとう 🎉
  </>
)

export const EncourageMessage = () => (
  <>
    😢 ざんねん...
  </>
)

export default Message
