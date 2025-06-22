export const QuizScoreBadge = ({ score }: { score: number }) => {
  return (
    <div className="flex justify-between bg-light px-8 lg:px-12 py-4 lg:py-6 gap-4 lg:gap-6 rounded-[0.25rem] lg:rounded-[0.375rem] min-w-60">
      <img
        src="icons/banknotes.png"
        className="w-14 lg:w-22 h-14 lg:h-22"
        width={14}
        height={14}
        alt="banknotes"
      />
      <span className="text-typo-body-02 lg:text-typo-heading-02 lg:leading-22 font-semibold text-primary">
        {score}
      </span>
    </div>
  )
}
