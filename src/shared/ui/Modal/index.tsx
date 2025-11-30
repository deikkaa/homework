import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(22, 22, 22, 0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '500px',
        width: '100%',
        position: 'relative'
      }}>
        <button style={{
          position: 'absolute', top: '10px', right: '10px', cursor: 'pointer'
        }} onClick={onClose}>Закрыть</button>
        {children}
      </div>
    </div>,
    document.body
  );
};