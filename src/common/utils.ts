import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getOptionLabel = (idx: number) => String.fromCharCode(65 + idx)

export const formatCurrency = (currency: Currency, number: number) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number)

  return formatted + ',' // Добавляем запятую в конце
}

export const isNumberNegative = (num: number) => {
  return num < 0
}
