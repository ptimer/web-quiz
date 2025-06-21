import { QUIZ_SCORE_MULTIPLIER } from '@/common/constants'
import { CheckIcon } from './icons'
import { IconBox } from './ui'

interface Props {
  quizName: string
  score: number
}

export const QuizResult = ({ quizName, score }: Props) => {
  const correctAnswersCount = score !== 0 ? score / QUIZ_SCORE_MULTIPLIER : 0

  return (
    <div className="flex flex-col items-center">
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
      <div className="rounded-[0.5rem] bg-light text-typo-body-01 lg:text-[1.25rem] lg:leading-27 leading-20 text-dark w-full max-w-335">
        <div className="flex items-center py-18 lg:py-16 px-16 lg:24">
          <IconBox className="bg-background mr-16 lg:mr-30">
            <img
              src="icons/cash.svg"
              className="w-23 h-15"
              width={23}
              height={15}
              alt="Banknotes icon"
            />
          </IconBox>
          <span>SCORE GAINED</span>
          <span className="font-semibold ml-auto">{score}</span>
        </div>
        <div className="bg-background h-1 w-full"></div>
        <div className="flex items-center py-18 lg:py-16 px-16 lg:24">
          <IconBox className="bg-background mr-16 lg:mr-30">
            <CheckIcon className="w-23 h-15" width={14} height={10} />
          </IconBox>
          <span>CORRECT PREDICTIONS</span>
          <span className="font-semibold ml-auto">{correctAnswersCount}</span>
        </div>
      </div>
    </div>
  )
}
