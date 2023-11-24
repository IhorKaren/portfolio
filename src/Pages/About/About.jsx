import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AboutWrap } from './About.styled';
import Aside from 'components/Aside/Aside';
import { Outlet } from 'react-router-dom';
import Info from 'components/Info/Info';
import Contacts from 'components/Contacts/Contacts';
import Snippets from 'components/Snippets/Snippets';

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
      <Aside text="personal-info">
        <Info />
        <Contacts isNeedBorder />
      </Aside>
      <AboutWrap>
        <Outlet />
        {/* <Snippets /> */}
      </AboutWrap>
    </>
  );
};

export default About;
