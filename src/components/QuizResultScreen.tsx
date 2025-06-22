import { useSelector } from 'react-redux'

import { QUIZ_BASE_SCORE } from '@/common/constants'
import { Button, QuizCompletedScreen, QuizForm, QuizStats } from '@/components'
import { scoreSelector } from '@/store/features/quizSlice'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface Props {
  quizName: string
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export const QuizResultScreen = ({ quizName }: Props) => {
  const score = useSelector(scoreSelector)
  const [isCompleted, setIsCompleted] = useState(false)

  const correctAnswersCount = score !== 0 ? score / QUIZ_BASE_SCORE : 0

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setIsCompleted(true)
  }

  const isButtonDisabled =
    !!errors.firstName || !!errors.lastName || !!errors.email || !!errors.phone

  if (isCompleted) return <QuizCompletedScreen />

  return (
    <div className="flex flex-col items-center flex-1 px-20 lg:px-60">
      <img
        src="images/gift-box.svg"
        className="w-144 lg:w-200 mb-40"
        width="144"
        height="152"
        alt="Gift box picture"
      />

      <h1 className="text-typo-heading-02 lg:text-typo-heading-01 leading-28 lg:leading-38 font-semibold text-primary mb-58 lg:mb-70">
        Results of {quizName}
      </h1>

      <QuizStats score={score} correctAnswersCount={correctAnswersCount} className="mb-60" />

      <QuizForm className="mb-147" register={register} control={control} errors={errors} />

      <footer className="mt-auto flex justify-center w-full mb-58">
        <Button onClick={handleSubmit(onSubmit)} disabled={isButtonDisabled}>
          OKAY
        </Button>
      </footer>
    </div>
  )
}
