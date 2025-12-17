import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserTabs({ userId }: { userId: number }) {
  return (
    <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <NavLink to={`/users/${userId}/posts`} style={linkStyle} >
        Посты
      </NavLink>
      <NavLink to={`/users/${userId}/albums`} style={linkStyle} >
        Альбомы
      </NavLink>
      <NavLink to={`/users/${userId}/todos`} style={linkStyle} >
        Задачи
      </NavLink>
    </nav>
  )
}

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'blue'
}