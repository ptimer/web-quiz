import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { QUIZ_BASE_SCORE } from '@/common/constants'
interface QuizState {
  score: number
  isFinished: boolean
}

const initialState: QuizState = {
  score: 0,
  isFinished: false
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    increaseScore: (state: QuizState) => {
      const prevScore = state.score
      state.score = prevScore + QUIZ_BASE_SCORE
    },
    setIsFinished: (state: QuizState, action: PayloadAction<boolean>) => {
      state.isFinished = action.payload
    }
  }
})

export const { increaseScore, setIsFinished } = quizSlice.actions

export const scoreSelector = (state: RootState): QuizState['score'] => state.quiz.score

export const isFinishedSelector = (state: RootState): QuizState['isFinished'] =>
  state.quiz.isFinished

export default quizSlice.reducer
