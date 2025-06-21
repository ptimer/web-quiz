interface Props extends React.ComponentProps<'div'> {
  currentStep: number
  totalSteps: number
}

export const ProgressBar = ({ currentStep, totalSteps }: Props) => {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="flex items-center gap-12 lg:gap-14 w-full">
      <progress
        className="w-full bg-light lg:bg-background rounded-[1rem] h-12 lg:h-16 overflow-hidden appearance-none [&::-webkit-progress-bar]:bg-light lg:[&::webkit-progress-bar]:bg-background [&::-webkit-progress-bar]:rounded-[1rem] [&::-webkit-progress-bar]:h-full [&::-webkit-progress-value]:bg-success [&::-webkit-progress-value]:rounded-[1rem] [&::-moz-progress-bar]:bg-success [&::-moz-progress-bar]:rounded-[1rem]"
        value={progress}
        max="100"
      ></progress>

      <span className="text-typo-body-02 lg:text-typo-body-02 leading-20 text-gray font-semibold">
        {currentStep}/{totalSteps}
      </span>
    </div>
  )
}
