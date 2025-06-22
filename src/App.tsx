import { Quiz } from '@/components'

import { useGetQuizzesQuery } from './store/features/apiSlice'

function App() {
  const { data: quizzes = [], isLoading, isError, error } = useGetQuizzesQuery()
  console.log(error)
  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Something went wrong</div>

  const firstQuiz = quizzes[0]

  if (!quizzes.length || !firstQuiz) return <div>No quizzes found</div>

  return <Quiz {...firstQuiz} />
}

export default App
