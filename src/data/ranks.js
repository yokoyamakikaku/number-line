const ranks = {
  1: {
    goal: 1,
    start: [0, 2],
    length: [3],
    gap: [1],
    hints: [0, 1],
    hitCount: 0,
    optionCount: 3
  },
  2: {
    goal: 2,
    start: [0, 1, 3],
    length: [5],
    gap: [1],
    hints: [0, 1, 4],
    hitCount: 0,
    optionCount: 3
  },
  3: {
    goal: 5,
    start: [0, 10, 20, 30],
    length: [5],
    gap: [2],
    hints: [0, 2, 4],
    hitCount: 0,
    optionCount: 3
  },
  4: {
    goal: 5,
    start: [0, 5, 10, 15, 20],
    length: [5],
    gap: [5],
    hints: [0, 2, 4],
    hitCount: 0,
    optionCount: 5
  },
  5: {
    goal: 5,
    start: [0, 100, 150, 200, 250],
    length: [9],
    gap: [20],
    hints: [0, 4, 8],
    hitCount: 0,
    optionCount: 5
  },
  6: {
    goal: 5,
    start: [0, 1000, 1500, 2000, 2500],
    length: [9],
    gap: [100, 200, 150],
    hints: [0, 4, 8],
    hitCount: 0,
    optionCount: 5
  }
}

export default ranks
