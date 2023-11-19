import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  PageContainer,
} from 'components/Container/Container.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <PageContainer>
          <main>
            <Outlet />
          </main>
        </PageContainer>
      </Suspense>
      <Footer />
    </Container>
  );
};

export default Layout;
