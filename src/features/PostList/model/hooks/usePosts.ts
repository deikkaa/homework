import { useGetPostsQuery } from '../../../../shared/api/postsApi'

export function usePosts() {
  const { data: posts = [], error, isLoading } = useGetPostsQuery()

  return {
    posts,
    error,
    isLoading,
  }
}