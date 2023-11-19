import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </Container>
  );
};

export default Layout;
