import React from 'react';
import { useTheme } from '../../../shared/lib/theme/useTheme';
import '../../../main.css';

export const ThemeSwitcher: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button className='button' onClick={toggleTheme}>
      Переключить тему
    </button>
  );
};