import React, { useMemo } from 'react'
import PostCard from '../../entities/post/PostCard'
import { useGetPostsQuery } from '../../shared/api/postsApi'
import PostLengthFilter from '../../features/PostLengthFilter/PostLengthFilter'

interface PostListProps {
}

export default function PostList() {
  const { data: posts = [], error, isLoading } = useGetPostsQuery()

  const [filterEnabled, setFilterEnabled] = React.useState(false)

  const filteredPosts = useMemo(() => {
    if (!filterEnabled) return posts
    return posts.filter((post) => post.title.length > 20)
  }, [posts, filterEnabled])

  const toggleFilter = () => setFilterEnabled(!filterEnabled)

  if (isLoading) return <div>Загружается...</div>
  if (error) return <div>Ошибка загрузки</div>

  return (
    <div>
      <PostLengthFilter onToggle={toggleFilter} enabled={filterEnabled} />
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}