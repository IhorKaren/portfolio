import { useNavigate, useLocation } from 'react-router-dom';
import Aside from 'components/Aside/Aside';
import { Outlet } from 'react-router-dom';
import Info from 'components/Info/Info';
import { useEffect } from 'react';

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
      </Aside>
      <Outlet />
    </>
  );
};

export default About;
