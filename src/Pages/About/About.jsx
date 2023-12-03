import { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

import { PageContainer } from 'components/Container/Container.styled';
import Aside from 'components/Aside/Aside';
import Info from 'components/Info/Info';
import Contacts from 'components/Contacts/Contacts';
// import Snippets from 'components/Snippets/Snippets';

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      navigate(`/about/bio`);
    }
  });

  return (
    <>
      <Aside text="about-me">
        <Info />
        <Contacts isNeedBorder />
      </Aside>
      <PageContainer>
        <Outlet />
      </PageContainer>
      {/* <Snippets /> */}
    </>
  );
};

export default About;
