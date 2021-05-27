import { createContext, useCallback, useContext, useMemo, useReducer } from 'react'

import reducer, { initializerArg, initializer } from '../reducers/app'

const Context = createContext()

export const Provider = props => {
  const value = useReducer(reducer, initializerArg, initializer)

  return <Context.Provider value={value} {...props} />
}

export const useProgress = () => {
  const [{ point, goal }] = useContext(Context)

  const progress = useMemo(() => {
    return Number((point / goal).toFixed(2))
  }, [point, goal])

  return progress
}

export const useRank = () => {
  const [{ rank }] = useContext(Context)
  return rank
}

export const useAnswered = () => {
  const [{ answered }] = useContext(Context)
  return answered
}

export const useIsAnswered = () => {
  const answered = useAnswered()

  const isAnswered = useMemo(() => {
    return answered !== null
  }, [answered])

  return isAnswered
}

export const useReset = () => {
  const [, dispatch] = useContext(Context)

  const reset = useCallback(() => {
    dispatch({ type: 'reset' })
  }, [])

  return reset
}

export const useAnswer = value => {
  const [, dispatch] = useContext(Context)

  const answer = useCallback(() => {
    dispatch({
      type: 'answer',
      payload: {
        answered: value
      }
    })
  }, [value])

  return answer
}
export const useQuestion = () => {
  const [{ question }] = useContext(Context)
  return useMemo(() => {
    return question
  }, [question])
}

export const useCorrect = () => {
  const { units } = useQuestion()
  const correct = useMemo(() => {
    return units.find(unit => unit.isTarget).number
  }, [units])
  return correct
}

export const useGoNext = () => {
  const [, dispatch] = useContext(Context)

  const goNext = useCallback(() => {
    dispatch({
      type: 'next'
    })
  }, [])

  return goNext
}
