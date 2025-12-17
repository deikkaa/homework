import React from 'react'

interface CommentListProps {
  comments: { id: number; text: string }[]
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  )
}