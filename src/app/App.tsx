import { useState } from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import PostList from '../widgets/PostList/PostList'
import type { PostType } from '../entities/post/Post'
import { Modal } from '../shared/ui/Modal/Modal'
import Button from '../shared/ui/Button'
import ThemeSwitcher from '../features/ThemeSwitcher/ThemeSwitcher'

const samplePosts: PostType[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Заголовок поста №${i + 1}`,
  body: `Описание для поста №${i + 1}`,
  comments: [
    { id: 1, text: 'Комментарий 1' },
    { id: 2, text: 'Комментарий 2' },
  ],
}))

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <div style={{ padding: 20 }}>
          <Button onClick={() => setModalOpen(true)}>О проекте</Button>
          {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <Modal.Header>Информация о проекте</Modal.Header>
              <Modal.Body>
                <p>Модалка</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setModalOpen(false)}>Закрыть</Button>
              </Modal.Footer>
            </Modal>
          )}

          <ThemeSwitcher onToggle={toggleTheme} />

          <PostList posts={samplePosts} />
        </div>
      </MainLayout>
    </ThemeProvider>
  )
}