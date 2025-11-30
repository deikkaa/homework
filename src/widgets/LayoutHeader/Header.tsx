import React from 'react';
import styles from './Header.module.css';
import '../../main.css';
import { useState } from 'react';
import { Modal } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Посты</h1>
      <Button className='button' onClick={openModal}>О проекте</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>О проекте</h2>
        <p>..</p>
      </Modal>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;