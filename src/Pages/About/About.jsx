import Aside from 'components/Aside/Aside';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Aside></Aside>
      <Outlet />
    </>
  );
};

export default About;
