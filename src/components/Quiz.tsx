import { QuizQuestions, QuizHeader, QuizResult } from '@/components'
import { isFinishedSelector } from '@/store/features/quizSlice'
import { useSelector } from 'react-redux'

export const Quiz = ({ id, name }: Quiz) => {
  const isFinished = useSelector(isFinishedSelector)

  return (
    <div className="min-h-screen flex flex-col w-full">
      <QuizHeader title={name} className="my-40 mb-24 lg:mb-90 px-20 lg:px-60" />
      <main className="flex flex-col px-20 lg:px-60 mb-147 lg:mb-60">
        {isFinished ? <QuizResult quizName={name} /> : <QuizQuestions quizId={id} />}
      </main>
    </div>
  )
}
