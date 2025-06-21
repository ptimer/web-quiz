import { cn } from '@/common/utils'

export const IconBox = ({ className, children, ...props }: React.ComponentProps<'button'>) => {
  return (
    <button
      type="button"
      className={cn(
        'flex items-center justify-center w-36 h-36 rounded-full bg-light cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
