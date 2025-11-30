import React from 'react';
import { MainLayout } from './shared/layouts';
import Header from './widgets/LayoutHeader/Header';
import Footer from './widgets/LayoutFooter/Footer';
import PostList from './widgets/PostList';
import { ThemeProvider } from './shared/lib/theme/ThemeProvider';
import "./main.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
    <MainLayout>
      <Header />
      <main className='aa'>
        <PostList />
      </main>
      <Footer />
    </MainLayout>
    </ThemeProvider>
  );
};

export default App;