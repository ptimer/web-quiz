import { ScoreBadge } from '@/components/ui/ScoreBadge'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { IconBox } from './ui'
import { cn } from '@/common/utils'
import { useSelector } from 'react-redux'
import { isFinishedSelector, scoreSelector } from '@/store/features/quizSlice'

interface Props extends React.ComponentProps<'div'> {
  title: string
  handleCloseClick?: () => void
}
export const QuizHeader = ({ title, handleCloseClick, className }: Props) => {
  const score = useSelector(scoreSelector)
  const isFinished = useSelector(isFinishedSelector)

  const composeFinishStep = () => {
    if (isFinished) return <></>

    return (
      <>
        <ScoreBadge score={score} />
        <h3 className="text-typo-heading-03 lg:text-[1.5rem] lg:leading-24 text-black font-semibold">
          {title}
        </h3>
      </>
    )
  }

  return (
    <div
      className={cn('flex justify-between items-center', { 'justify-end': isFinished }, className)}
    >
      {composeFinishStep()}
      <IconBox onClick={handleCloseClick}>
        <CloseIcon className="h-12 w-12 lg:w-17 lg:h-17" />
      </IconBox>
    </div>
  )
}
