import React from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

export function Modal({ children, onClose }: ModalProps) {
  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as Element
  )
}

Modal.Header = ({ children }: { children: React.ReactNode }) => <div style={{ marginBottom: 10 }}>{children}</div>
Modal.Body = ({ children }: { children: React.ReactNode }) => <div style={{ marginBottom: 10 }}>{children}</div>
Modal.Footer = ({ children }: { children: React.ReactNode }) => <div style={{ display: 'flex', justifyContent: 'flex-end' }}>{children}</div>
