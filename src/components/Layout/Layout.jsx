import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
