import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
interface QuizState {
  selectedAnswerId: string | null
}

const initialState: QuizState = {
  selectedAnswerId: null
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSelectedAnswerId: (
      state: QuizState,
      action: PayloadAction<QuizState['selectedAnswerId']>
    ) => {
      state.selectedAnswerId = action.payload
    }
  }
})

export const { setSelectedAnswerId } = quizSlice.actions

export const selectedAnswerIdSelector = (state: RootState): QuizState['selectedAnswerId'] =>
  state.quiz.selectedAnswerId

export default quizSlice.reducer
