import React from 'react';
import { MainLayout } from './shared/layouts';
import Header from './widgets/LayoutHeader/Header';
import Footer from './widgets/LayoutFooter/Footer';
import PostList from './widgets/PostList';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Header />
      <main>
        <PostList />
      </main>
      <Footer />
    </MainLayout>
  );
};

export default App;