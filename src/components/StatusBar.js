import { useMemo } from 'react'
import * as Icons from 'react-feather'

import { useReset, useProgress, useRank } from '../hooks/app'

const StatusBar = () => {
  const reset = useReset()
  const progress = useProgress()
  const rank = useRank()

  const barBodyStyle = useMemo(() => {
    return {
      width: `${Math.floor(progress * 100)}%`
    }
  }, [progress])

  return (
    <div className="p-2 flex items-center flex-srhink-0 h-16">
      <button className="w-12 h-12 flex items-center justify-center" onClick={reset}>
        <Icons.RefreshCw />
      </button>
      <div className="mx-4 flex-grow">
        <div className="h-8 rounded-lg bg-gray-200">
          <div className="h-full bg-blue-500 rounded-lg" style={barBodyStyle}></div>
        </div>
      </div>
      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex justify-center items-center">
        <div className="text-2xl leading-none">{rank}</div>
      </div>
    </div>
  )
}

export default StatusBar
