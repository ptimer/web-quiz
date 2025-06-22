import { useSelector } from 'react-redux'

import { QUIZ_BASE_SCORE } from '@/common/constants'
import { Button, QuizStats } from '@/components'
import { scoreSelector } from '@/store/features/quizSlice'

interface Props {
  quizName: string
}

export const QuizResult = ({ quizName }: Props) => {
  const score = useSelector(scoreSelector)
  const correctAnswersCount = score !== 0 ? score / QUIZ_BASE_SCORE : 0

  return (
    <div className="flex flex-col items-center flex-1">
      <img
        src="images/gift-box.svg"
        className="w-144 lg:w-200 mb-40"
        width="144"
        height="152"
        alt="Gift box picture"
      />

      <h1 className="text-typo-heading-02 lg:text-typo-heading-02 lg:leading-38 leading-28 font-semibold text-primary mb-58">
        Results of {quizName}
      </h1>

      <QuizStats score={score} correctAnswersCount={correctAnswersCount} />

      <div className="mb-147"></div>
      <footer className="mt-auto flex justify-center w-full lg:py-20 mb-58">
        <Button>FINISH</Button>
      </footer>
    </div>
  )
}
