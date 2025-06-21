import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getQuizzes: builder.query<Quiz[], void>({
      query: () => '/quizzes'
    }),
    getQuestionIdsByQuizId: builder.query<string[], string>({
      query: (quizId) => `/quizQuestions?quizId=${quizId}`,
      transformResponse: (response: QuizQuestions[]) => response[0].questionIds
    }),
    getQuestionsByIds: builder.query<Question[], string[]>({
      query: (ids) => {
        let q = ''

        ids.forEach((id, idx) => {
          if (idx === 0) q = `id=${id}`

          return (q += `&id=${id}`)
        })

        return `/questions?ids=${q}`
      }
    })
  })
})

export const { useGetQuizzesQuery, useGetQuestionIdsByQuizIdQuery, useGetQuestionsByIdsQuery } =
  apiSlice
