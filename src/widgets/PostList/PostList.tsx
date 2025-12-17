import React, { useMemo } from 'react'
import PostCard from '../../entities/post/PostCard'
import PostLengthFilter from '../../features/PostLengthFilter/PostLengthFilter'
import { usePosts } from '../../features/PostList/model/hooks/usePosts'

export default function PostList() {
  const { posts, error, isLoading } = usePosts()

  const [filterEnabled, setFilterEnabled] = React.useState(false)

  const filteredPosts = useMemo(() => {
    if (!filterEnabled) return posts
    return posts.filter((post:any) => post.title.length > 20)
  }, [posts, filterEnabled])

  const toggleFilter = () => setFilterEnabled(!filterEnabled)

  if (isLoading) return <div>Загружается...</div>
  if (error) return <div>Ошибка загрузки</div>

  return (
    <div>
      <PostLengthFilter onToggle={toggleFilter} enabled={filterEnabled} />
      {filteredPosts.map((post:any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}