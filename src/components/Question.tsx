import { getOptionLabel } from '@/common/utils'
import { Option } from '@/components'

export const Question = ({ text, options }: Question) => (
  <div className="flex flex-col items-center gap-64 lg:gap-80">
    <h1 className="text-typo-heading-02 lg:text-typo-heading-01 leading-30 text-primary font-semibold text-center">
      {text}
    </h1>
    <div className="flex flex-col items-center gap-30 w-full">
      {options.map((option, idx) => (
        <Option key={option.id} label={getOptionLabel(idx)} {...option} />
      ))}
    </div>
  </div>
)
