import React, { useState, useEffect } from 'react'
import { useGetCommentsForPostQuery } from '../../shared/api/postsApi'

interface PostProps {
  post: {
    id: number
    title: string
    body: string
  }
}

export default function PostCard({ post }: PostProps) {
  const { data: comments = [], isLoading, error } = useGetCommentsForPostQuery(post.id)
  const [commentsCollapsed, setCommentsCollapsed] = useState(false)

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => setCommentsCollapsed(!commentsCollapsed)}>
        {commentsCollapsed ? 'Показать комментарии' : 'Свернуть комментарии'}
      </button>
      {!commentsCollapsed && (
        <div>
          {isLoading && <p>Загружаются комментарии</p>}
          {error && <p>Ошибка загрузки комментариев</p>}
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.body} — {comment.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}