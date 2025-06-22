import { useSelector } from 'react-redux'
import { isFinishedSelector, scoreSelector } from '@/store/features/quizSlice'
import { QuizScoreBadge, CloseIcon, IconBox } from '@/components'
import { cn } from '@/common/utils'

interface Props extends React.ComponentProps<'div'> {
  title: string
  handleCloseClick?: () => void
}
export const QuizHeader = ({ title, handleCloseClick }: Props) => {
  const score = useSelector(scoreSelector)
  const isFinished = useSelector(isFinishedSelector)

  const composeFinishStep = () => {
    if (isFinished) return <></>

    return (
      <>
        <QuizScoreBadge score={score} />
        <h3 className="text-typo-heading-03 lg:text-[1.5rem] lg:leading-24 text-black font-semibold">
          {title}
        </h3>
      </>
    )
  }

  return (
    <header className={cn('flex justify-between items-center', { 'justify-end': isFinished })}>
      {composeFinishStep()}
      <IconBox onClick={handleCloseClick}>
        <CloseIcon className="h-12 w-12 lg:w-17 lg:h-17" />
      </IconBox>
    </header>
  )
}
