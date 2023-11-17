import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import Layout from './Layout/Layout';

const Greeting = lazy(() => import('../Pages/Greeting'));
const About = lazy(() => import('../Pages/About'));
const Projects = lazy(() => import('../Pages/Projects'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Greeting />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Greeting />} />
        </Route>
      </Routes>
    </Container>
  );
};
