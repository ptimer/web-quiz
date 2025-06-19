type Currency = 'INR' | 'USD' | 'EUR' | 'GBP'

interface MarketIndex {
  name: string
  currentValue: number
  currency: Currency
  percentChange: number
}

interface Quiz {
  id: string
  name: string
}

interface QuizQuestions {
  quizId: string
  questionIds: string[]
}

interface Option<T> {
  id: string
  data: T
}

type OptionVariant = 'marketIndex' | 'text'

interface BaseOptionData {
  variant: OptionVariant
}

interface TextOptionData extends BaseOptionData {
  variant: 'text'
  text: string
}

interface MarketIndexOptionData extends BaseOptionData, MarketIndex {
  variant: 'marketIndex'
}

type OptionData = MarketIndexOptionData | TextOptionData

interface Question<T = OptionData> {
  id: string
  text: string
  options: Option<T>[]
  correctAnswerId: string
}
