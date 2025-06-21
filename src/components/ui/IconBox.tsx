import { cn } from '@/common/utils'

export const IconBox = ({ className, children, ...props }: React.ComponentProps<'button'>) => {
  return (
    <button
      type="button"
      className={cn(
        'flex items-center justify-center w-36 h-36 lg:h-50 lg:w-50 rounded-full bg-light cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
