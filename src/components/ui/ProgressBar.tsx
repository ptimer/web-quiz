import { cn } from '@/common/utils'

interface Props extends React.ComponentProps<'div'> {
  currentStep: number
  totalSteps: number
  className?: string
}

export const ProgressBar = ({ currentStep, totalSteps, className }: Props) => {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className={cn('progress-bar', className)}>
      <progress className="progress" value={progress} max="100"></progress>

      <span className="text-typo-body-02 lg:text-typo-body-01 leading-20 text-gray font-semibold">
        {currentStep}/{totalSteps}
      </span>
    </div>
  )
}
