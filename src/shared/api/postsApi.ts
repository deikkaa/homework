import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Post {
  id: number
  title: string
  body: string
  comments: Comment[]
}

export interface Comment {
  id: number
  name: string
  email: string
  body: string
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Post', 'Comment'],
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => '/posts',
      transformResponse: (response: any[]) =>
        response.map((post) => ({ ...post, comments: [] })),
    }),
    getCommentsForPost: build.query<Comment[], number>({
      query: (postId) => `/comments?postId=${postId}`,
      providesTags: (result, error, id) => [{ type: 'Comment', id }],
    }),
  }),
})

export const { useGetPostsQuery, useGetCommentsForPostQuery } = postsApi