import { cn } from '@/common/utils'
import { CheckIcon, IconBox } from '@/components'

interface Props extends React.ComponentProps<'div'> {
  score: number
  correctAnswersCount: number
}

export const QuizStats = ({ score, correctAnswersCount, className }: Props) => {
  return (
    <div
      className={cn(
        'rounded-[0.5rem] bg-light text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-dark w-full lg:w-510',
        className
      )}
    >
      <div className="flex items-center py-18 lg:py-24 px-16 lg:px-24">
        <IconBox className="bg-background mr-16 lg:mr-30">
          <img
            src="icons/cash.svg"
            className="w-23 h-15 lg:w-26 lg:h-18"
            width={23}
            height={15}
            alt="Banknotes icon"
          />
        </IconBox>
        <span>SCORE GAINED</span>
        <span className="font-semibold ml-auto">{score}</span>
      </div>
      <div className="bg-background h-1 w-full"></div>
      <div className="flex items-center py-18 lg:py-24 px-16 lg:px-24">
        <IconBox className="bg-background mr-16 lg:mr-30">
          <CheckIcon
            className="w-14 h-10 lg:w-16 lg:h-12 [&_path]:stroke-2 [&_path]:stroke-[#26D266] [&_path]:fill-[#26D266]"
            width={14}
            height={10}
          />
        </IconBox>
        <span>CORRECT PREDICTIONS</span>
        <span className="font-semibold ml-auto">{correctAnswersCount}</span>
      </div>
    </div>
  )
}
