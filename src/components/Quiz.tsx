import { QUIZ_SCORE_MULTIPLIER } from '@/common/constants'
import { cn } from '@/common/utils'
import { Button, ProgressBar, Question, QuizHeader, QuizResult } from '@/components'
import {
  useGetQuestionIdsByQuizIdQuery,
  useGetQuestionsByIdsQuery
} from '@/store/features/apiSlice'
import { selectedAnswerIdSelector, setSelectedAnswerId } from '@/store/features/quizSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Quiz = ({ id, name }: Quiz) => {
  const dispatch = useDispatch()

  const {
    data: questionIds = [],
    isLoading: isLoadingIds,
    isError: isErrorIds,
    error: errorIds
  } = useGetQuestionIdsByQuizIdQuery(id)

  const {
    data: questions = [],
    isLoading: isLoadingQuestions,
    isError: isErrorQuestions,
    error: errorQuestions
  } = useGetQuestionsByIdsQuery(questionIds, {
    skip: !questionIds.length
  })

  const isLoading = isLoadingIds || isLoadingQuestions
  const isError = isErrorIds || isErrorQuestions
  const error = errorIds || errorQuestions

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const selectedAnswerId = useSelector(selectedAnswerIdSelector)

  const hasNoQuestions = !isLoading && !isError && !questions.length
  const showQuestion = !isLoading && !isError && !!questions.length && !isFinished

  const question = questions[currentQuestionIndex]

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      dispatch(setSelectedAnswerId(null))

      if (question.correctAnswerId === selectedAnswerId) {
        setScore((prev) => prev + QUIZ_SCORE_MULTIPLIER)
      }
    } else {
      setIsFinished(true)
    }
  }

  const composeStatus = () => {
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>{String(error)}</div>
    if (hasNoQuestions) return <div>No questions found</div>
  }

  const composeProgressBar = () => {
    if (isFinished) return <></>

    if (!isLoading && !isError && hasNoQuestions) return <></>

    // plus 1 step for the result
    const totalSteps = questionIds.length + 1
    const currentStep = currentQuestionIndex + 1

    return <ProgressBar {...{ currentStep, totalSteps }} />
  }

  const composeNextButtonText = () => {
    if (isFinished) return 'OKAY'

    const isLastQuestion = currentQuestionIndex === questions.length - 1

    if (isLastQuestion) return 'FINISH'

    return 'CONTINUE'
  }

  const progressBar = composeProgressBar()

  const button = (
    <Button disabled={!selectedAnswerId} onClick={handleNext}>
      {composeNextButtonText()}
    </Button>
  )

  const composeQuizFooter = () => (
    <footer className="mt-auto flex justify-center w-full lg:bg-light lg:py-20 pb-58">
      <div
        className={cn('flex justify-center w-full lg:max-w-790 lg:justify-between', {
          'lg:justify-center': isFinished
        })}
      >
        {!isFinished && <div className="hidden lg:flex lg:w-240">{progressBar}</div>}
        {button}
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="flex flex-col gap-24 my-40 lg:mb-90 px-20 lg:px-60">
        <QuizHeader score={score} title={name} handleCloseClick={() => {}} />
        <div className="lg:hidden">{progressBar}</div>
      </div>

      <main className="flex flex-col px-20 lg:px-60 mb-147 lg:mb-60">
        {composeStatus()}

        {showQuestion && <Question {...question} />}

        {isFinished && <QuizResult quizName={name} score={score} />}
      </main>

      {composeQuizFooter()}
    </div>
  )
}
