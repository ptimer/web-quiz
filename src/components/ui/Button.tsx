import { cn } from '@/common/utils'

export const Button = ({
  className,
  disabled,
  children,
  ...props
}: React.ComponentProps<'button'>) => {
  return (
    <button
      type="button"
      className={cn(
        'text-uppercase rounded-[0.5rem] max-w-240 w-full flex items-center justify-center p-20 text-typo-body-01 leading-20 font-semibold bg-success text-light cursor-pointer',
        className,
        {
          'bg-gray-alt text-background-alt': disabled
        }
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
