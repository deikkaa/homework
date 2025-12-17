import React from 'react'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      style={{
        padding: '8px 16px',
        margin: '5px',
        cursor: 'pointer',
        backgroundColor: '#1976d2',
        color: '#fff',
        border: 'none',
        borderRadius: 4,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}