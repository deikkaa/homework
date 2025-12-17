import React from 'react'

interface FilterProps {
  onToggle: () => void
  enabled: boolean
}

export default function PostLengthFilter({ onToggle, enabled }: FilterProps) {
  return (
    <button onClick={onToggle}>
      {enabled ? 'Фильтр: длинные заголовки' : 'Показать все посты'}
    </button>
  )
}