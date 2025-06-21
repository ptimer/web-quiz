import { Quiz } from '@/components'

import { useGetQuizzesQuery } from './store/features/apiSlice'

function App() {
  const { data: quizzes = [], isLoading, isError, error } = useGetQuizzesQuery()

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>{String(error)}</div>

  const firstQuiz = quizzes[0]

  if (!quizzes.length || !firstQuiz) return <div>No quizzes found</div>

  return <Quiz {...firstQuiz} />
}

export default App
