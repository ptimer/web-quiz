export const ScoreBadge = ({ score }: { score: number }) => {
  return (
    <div className="flex justify-between bg-light px-8 py-4 gap-4 rounded-[0.25rem] min-w-60">
      <img src="icons/banknotes.png" width={14} height={14} alt="banknotes" />
      <span className="text-typo-body-02 font-semibold text-primary">{score}</span>
    </div>
  )
}
