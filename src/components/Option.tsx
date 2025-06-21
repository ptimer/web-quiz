import { IconBox } from '@/components/ui/IconBox'
import { cn, formatCurrency, isNumberNegative } from '@/common/utils'
import { CheckIcon } from '@/components/icons/CheckIcon'
import { selectedAnswerIdSelector, setSelectedAnswerId } from '@/store/features/quizSlice'
import { useDispatch, useSelector } from 'react-redux'

interface Props extends Option {
  label: string
}

export const Option = ({ id, data, label }: Props) => {
  const dispatch = useDispatch()

  const selectedAnswerId = useSelector(selectedAnswerIdSelector)

  const selected = selectedAnswerId === id

  const handleSelect = () => {
    dispatch(setSelectedAnswerId(id))
  }

  const composeText = () => {
    let text: React.ReactNode = null

    switch (data.variant) {
      case 'text':
        text = <span className="font-semibold">{data.text}</span>
        break
      case 'marketIndex':
        text = (
          <>
            <span className="font-semibold mr-12">{data.name}</span>
            <span>{formatCurrency(data.currency, data.currentValue)}</span>

            <span
              className={cn('text-success-dark', {
                'text-danger': isNumberNegative(data.percentChange),
                'text-light': selected
              })}
            >
              {' '}
              {`${!isNumberNegative(data.percentChange) ? '+' : ''}${data.percentChange}%`}
            </span>
          </>
        )
        break
      default:
        text = ''
    }

    return (
      <div className={cn('text-typo-body-01 leading-20 text-dark', { 'text-light': selected })}>
        {text}
      </div>
    )
  }

  const composeIcon = () => {
    return (
      <IconBox className={cn('bg-background', { 'bg-light': selected })}>
        {selected ? (
          <CheckIcon className="w-14 h-10" />
        ) : (
          <span className="text-typo-body-01 text-dark font-semibold">{label}</span>
        )}
      </IconBox>
    )
  }

  return (
    <div
      className={cn(
        'flex items-center bg-light rounded-[0.5rem] w-full max-w-510 px-16 py-12 gap-16 cursor-pointer',
        {
          'bg-success-light': selected
        }
      )}
      onClick={handleSelect}
    >
      {composeIcon()}
      {composeText()}
    </div>
  )
}
