import ranks from '../data/ranks'

function randomItem (array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getParameter (rank) {
  const {
    start,
    length,
    gap,
    hints,
    hintCount,
    optionCount
  } = ranks[rank]

  return {
    start: randomItem(start),
    length: randomItem(length),
    gap: randomItem(gap),
    hints,
    hintCount,
    optionCount
  }
}

function getNotHintIndexes (units) {
  return units.map((unit, index) => unit.isHint ? null : index).filter(index => index !== null)
}

function createUnits (start, length, gap) {
  return Array.from({ length }).fill(null).map((value, index) => ({
    number: start + index * gap,
    isHint: false,
    isTarget: false
  }))
}

function setHints (units, hints, hintCount) {
  hints.forEach(index => {
    index = (index < 0) ? (units.length + index) : index
    units[index].isHint = true
  })

  const notHintIndexes = getNotHintIndexes(units)
  while (hintCount > 0) {
    const index = Math.floor(Math.random() * notHintIndexes.length)
    const [hintIndex] = notHintIndexes.splice(index, 1)
    units[hintIndex].isHint = true
    hintCount--
  }

  return units
}

function setTarget (units) {
  const notHintIndexes = getNotHintIndexes(units)
  const index = Math.floor(Math.random() * notHintIndexes.length)
  const [targetIndex] = notHintIndexes.splice(index, 1)
  units[targetIndex].isTarget = true
  return units
}

function createOptions (units, gap, length) {
  const correct = units.find(({ isTarget }) => isTarget).number

  let start = correct - Math.floor(length * Math.random()) * gap
  if (start < 0) start = correct

  return Array.from({ length }).fill(null).map((_, i) => start + i * gap)
}

export const create = rank => {
  const {
    start,
    length,
    gap,
    hints,
    hintCount,
    optionCount
  } = getParameter(rank)

  const units = setTarget(
    setHints(
      createUnits(
        start,
        length,
        gap
      ),
      hints,
      hintCount
    )
  )

  const options = createOptions(units, gap, optionCount)

  return { units, options }
}
