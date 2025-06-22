import { useSelector } from 'react-redux'

import { QuizQuestionsScreen, QuizHeader, QuizResultScreen } from '@/components'
import { isFinishedSelector } from '@/store/features/quizSlice'

export const Quiz = ({ id, name }: Quiz) => {
  const isFinished = useSelector(isFinishedSelector)

  return (
    <div className="min-h-screen flex flex-col w-full">
      <QuizHeader title={name} className="mt-40 mb-24 lg:mb-91 px-20 lg:px-60" />
      {isFinished ? <QuizResultScreen quizName={name} /> : <QuizQuestionsScreen quizId={id} />}
    </div>
  )
}
