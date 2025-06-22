import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getOptionLabel } from '@/common/utils'
import { Button, QuizOption, ProgressBar } from '@/components'
import {
  useGetQuestionIdsByQuizIdQuery,
  useGetQuestionsByIdsQuery
} from '@/store/features/apiSlice'
import { increaseScore, setIsFinished } from '@/store/features/quizSlice'

export const QuizQuestions = ({ quizId }: { quizId: string }) => {
  const dispatch = useDispatch()

  const {
    data: questionIds = [],
    isLoading: isLoadingIds,
    isError: isErrorIds,
    error: errorIds
  } = useGetQuestionIdsByQuizIdQuery(quizId)

  const {
    data: questions = [],
    isLoading: isLoadingQuestions,
    isError: isErrorQuestions,
    error: errorQuestions
  } = useGetQuestionsByIdsQuery(questionIds, {
    skip: !questionIds.length
  })

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)

  const isLoading = isLoadingIds || isLoadingQuestions
  const isError = isErrorIds || isErrorQuestions
  const error = errorIds || errorQuestions
  const hasNoQuestions = !isLoading && !isError && !questions.length

  const question = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const totalSteps = questionIds.length + 1
  const currentStep = currentQuestionIndex + 1

  const composeStatus = () => {
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>{String(error)}</div>
    if (hasNoQuestions) return <div>No questions found</div>
  }

  const failed = composeStatus()

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedOptionId(null)

      const isCorrectAnswer = question.correctAnswerId === selectedOptionId

      if (isCorrectAnswer) {
        dispatch(increaseScore())
      }
    } else {
      dispatch(setIsFinished(true))
    }
  }

  const handleClickOption = (optionId: string) => {
    setSelectedOptionId(optionId)
  }

  return failed ? (
    <div className="flex flex-col flex-1 items-center justify-center">{failed}</div>
  ) : (
    <div className="flex flex-col flex-1 items-center">
      <div className="flex flex-col items-center px-20 lg:px-60 mb-147 lg:mb-60">
        <ProgressBar {...{ currentStep, totalSteps }} className="lg:hidden mb-40 lg:mb-0" />
        <h1 className="mb-64 lg:mb-80 text-typo-heading-02 lg:text-typo-heading-01 leading-30 text-primary font-semibold text-center">
          {question.text}
        </h1>
        <div className="flex flex-col items-center gap-30 w-full">
          {question.options.map((option, idx) => (
            <QuizOption
              key={option.id}
              label={getOptionLabel(idx)}
              {...option}
              onClick={handleClickOption}
              selected={selectedOptionId === option.id}
            />
          ))}
        </div>
      </div>
      <footer className="mt-auto flex justify-center w-full lg:bg-light lg:py-20 mb-58 lg:mb-0">
        <div className={'flex justify-center w-full lg:max-w-690 lg:justify-between'}>
          <ProgressBar {...{ currentStep, totalSteps }} className="hidden lg:flex lg:w-240" />
          <Button disabled={!selectedOptionId} onClick={handleNext}>
            {isLastQuestion ? 'FINISH' : 'CONTINUE'}
          </Button>
        </div>
      </footer>
    </div>
  )
}
