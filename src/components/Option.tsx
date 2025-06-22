import { IconBox } from '@/components/ui/IconBox'
import { cn, formatCurrency, isNumberNegative } from '@/common/utils'
import { CheckIcon } from '@/components/icons/CheckIcon'

interface Props extends Option {
  label: string
  selected: boolean
  onClick: (id: string) => void
}

export const Option = ({ id, data, label, onClick, selected }: Props) => {
  const composeText = () => {
    let text: React.ReactNode = null

    switch (data.variant) {
      case 'text':
        text = <span className="font-semibold">{data.text}</span>
        break
      case 'marketIndex':
        text = (
          <>
            <span className="font-semibold mr-12 lg:mr-20">{data.name}</span>
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
      <div
        className={cn('text-typo-body-01 lg:text-[1.25rem] lg:leading-27 leading-20 text-dark', {
          'text-light': selected
        })}
      >
        {text}
      </div>
    )
  }

  const composeIcon = () => {
    return (
      <IconBox className={cn('bg-background', { 'bg-light': selected })}>
        {selected ? (
          <CheckIcon className="w-14 h-10 lg:w-16 lg:h-12" />
        ) : (
          <span className="text-typo-body-01 lg:text-[1.375rem] text-dark font-semibold">
            {label}
          </span>
        )}
      </IconBox>
    )
  }

  return (
    <div
      className={cn(
        'flex items-center bg-light rounded-[0.5rem] w-full max-w-510 px-16 lg:px-24 py-12 lg:py-16 gap-16 lg:gap-30 cursor-pointer',
        {
          'bg-success-light': selected
        }
      )}
      onClick={() => onClick(id)}
    >
      {composeIcon()}
      {composeText()}
    </div>
  )
}
