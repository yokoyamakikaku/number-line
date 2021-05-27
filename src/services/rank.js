import ranks from '../data/ranks'

export function getGoal (rank) {
  return ranks[rank].goal
}

export function existsRank (rank) {
  return !!ranks[rank]
}
