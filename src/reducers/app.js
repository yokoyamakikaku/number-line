import {
  create as createQuestion
} from '../services/question'
import {
  getGoal,
  existsRank
} from '../services/rank'

export const initializerArg = 1

export function initializer (startRank) {
  const goal = getGoal(startRank)
  const question = createQuestion(startRank)

  return {
    rank: startRank,
    goal,
    question,
    point: 0,
    answered: null
  }
}

export default function reducer (state, action) {
  switch (action.type) {
    case 'answer': {
      const { answered } = action.payload
      const correct = state.question.units.find(unit => unit.isTarget).number

      const point = Math.max(0, state.point + (answered === correct ? 1 : -1))
      return {
        ...state,
        answered,
        point
      }
    }
    case 'next': {
      const isFinished = state.point >= state.goal
      const rank = isFinished ? state.rank + 1 : state.rank
      if (!existsRank(rank)) return initializer(1)

      const point = isFinished ? 0 : state.point
      const goal = getGoal(rank)
      const question = createQuestion(rank)

      return {
        ...state,
        rank,
        point,
        goal,
        question,
        answered: null
      }
    }
    case 'reset': {
      return initializer(1)
    }
    default:
      throw Error()
  }
}
