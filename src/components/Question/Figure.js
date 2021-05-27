import { useMemo } from 'react'

import { useAnswered, useIsAnswered, useQuestion } from '../../hooks/app'

const Padding = ({ isBordered }) => {
  const className = useMemo(() => {
    return `w-32${isBordered ? ' border-b-2 border-gray-500' : ''}`
  }, [isBordered])
  return (
    <div className={className} />
  )
}

const Unit = ({ isTarget, isHint, number }) => {
  const answered = useAnswered()
  const isAnswered = useIsAnswered()
  const rootStyle = useMemo(() => ({ marginBottom: '-4px' }), [])

  const content = useMemo(() => {
    if (isTarget && isAnswered) return answered
    if (isHint || isAnswered) return number
    return ''
  }, [isAnswered, answered, isTarget, number])

  const contentStyle = useMemo(() => ({
    fontSize: (length => {
      switch (length) {
        case 1: return '2.5rem'
        case 2: return '2.0rem'
        case 3: return '1.8rem'
        default:
          return '1rem'
      }
    })(`${content}`.length)
  }), [content])

  const contentClassName = useMemo(() => {
    const classNameList = ['h-16 w-16 border-4 mb-4 flex items-center justify-center']

    if (!isTarget) {
      classNameList.push('border-transparent')
    } else if (!isAnswered) {
      classNameList.push('border-black')
    } else if (answered === number) {
      classNameList.push('border-green-500 text-green-800')
    } else {
      classNameList.push('border-red-500 text-red-800')
    }

    return classNameList.join(' ')
  }, [isTarget, isAnswered])

  return (
    <div className="flex flex-col items-center justify-end" style={rootStyle}>
      <div className={contentClassName}>
        <div style={contentStyle}>
          {content}
        </div>
      </div>
      <div className="border-r-4 border-black h-12" />
    </div>
  )
}

const Container = ({ children }) => {
  return (
    <div className="border-b-4 border-black flex-grow flex items-end">
      <div className="-ml-8 -mr-8 flex flex-grow justify-between">
        {children}
      </div>
    </div>
  )
}

const Figure = () => {
  const { units } = useQuestion()

  return (
    <div className="flex-grow flex pb-8">
      <Padding bordered />
      <Container>
        {units.map((unit, index) => <Unit key={index} {...unit} />)}
      </Container>
      <Padding bordered />
    </div>
  )
}

export default Figure
