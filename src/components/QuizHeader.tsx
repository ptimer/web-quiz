import { ScoreBadge } from '@/components/ui/ScoreBadge'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { IconBox } from './ui'
import { cn } from '@/common/utils'

interface Props extends React.ComponentProps<'div'> {
  score: number
  title: string
  handleCloseClick: () => void
}
export const QuizHeader = ({ score, title, handleCloseClick, className }: Props) => {
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <ScoreBadge score={score} />
      <h3 className="text-typo-heading-03 text-black font-semibold">{title}</h3>
      <IconBox onClick={handleCloseClick}>
        <CloseIcon className="h-12 w-12" />
      </IconBox>
    </div>
  )
}
