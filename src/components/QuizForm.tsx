import { cn } from '@/common/utils'
import { Controller, type Control, type FieldErrors, type UseFormRegister } from 'react-hook-form'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
}
interface Props {
  register: UseFormRegister<FormData>
  control: Control<FormData>
  errors: FieldErrors<FormData>
  className?: string
}

export const QuizForm = ({ className, register, control, errors }: Props) => (
  <div
    className={cn(
      'rounded-[0.5rem] bg-light text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-dark w-full lg:w-510',
      className
    )}
  >
    <form className="flex flex-col items-center py-18 lg:py-24 px-16 lg:px-24 gap-18 lg:gap-24">
      <h2 className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-dark font-semibold text-center">
        You're all set! Where should we send your results?
      </h2>
      <div className="w-full flex flex-col gap-8 lg:gap-16">
        <label
          htmlFor="firstName"
          className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-dark"
        >
          First name
        </label>
        <input
          id="firstName"
          {...register('firstName', { required: 'Please enter your first name' })}
          className="bg-light rounded-[0.5rem] w-full p-20 text-typo-body-01 leading-20 border-2 border-black"
        />
        {errors.firstName && (
          <p className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-danger">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div className="w-full flex flex-col gap-8 lg:gap-16">
        <label
          htmlFor="lastName"
          className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-dark"
        >
          Last name
        </label>
        <input
          id="lastName"
          {...register('lastName', { required: 'Oops, please enter your last name' })}
          className="bg-light rounded-[0.5rem] w-full p-20 text-typo-body-01 leading-20 border-2 border-black"
        />
        {errors.lastName && (
          <p className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-danger">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div className="w-full flex flex-col gap-8 lg:gap-16">
        <label
          htmlFor="email"
          className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-dark"
        >
          Email
        </label>
        <input
          id="email"
          {...register('email', {
            required: 'No email provided',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Wrong email format'
            }
          })}
          className="bg-light rounded-[0.5rem] w-full p-20 text-typo-body-01 leading-20 border-2 border-black"
        />
        {errors.email && (
          <p className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-danger">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="w-full flex flex-col gap-8 lg:gap-16">
        <label
          htmlFor="phone"
          className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-dark"
        >
          Phone number
        </label>
        <Controller
          name="phone"
          control={control}
          rules={{ required: 'Enter your phone number' }}
          render={({ field }) => (
            <PhoneInput
              inputProps={{ id: 'phone' }}
              {...field}
              country={'ua'}
              inputClass="!bg-light !rounded-[0.5rem] !w-full !pl-50 !p-20 !text-typo-body-01 !leading-20 !border-2 !border-black !h-full"
              buttonClass="!p-10 !border-none !bg-transparent"
            />
          )}
        />
        {errors.phone && (
          <p className="text-typo-body-01 leading-20 lg:text-[1.25rem] lg:leading-27 text-danger">
            {errors.phone.message}
          </p>
        )}
      </div>
    </form>
  </div>
)
