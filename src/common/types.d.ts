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

interface Option {
  id: string
  data: OptionData
}

interface BaseOptionData {
  variant: OptionVariant
}

type OptionVariant = 'text' | 'marketIndex'

interface TextOptionData extends BaseOptionData {
  variant: 'text'
  text: string
}

interface MarketIndexOptionData extends BaseOptionData, MarketIndex {
  variant: 'marketIndex'
}

type OptionData = MarketIndexOptionData | TextOptionData

interface Question {
  id: string
  text: string
  options: Option[]
  correctAnswerId: string
}
