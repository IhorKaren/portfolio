import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import Layout from './Layout/Layout';

const Greeting = lazy(() => import('../Pages/Greeting/Greeting'));
const About = lazy(() => import('../Pages/About/About'));
const Projects = lazy(() => import('../Pages/Projects/Projects'));
const Contact = lazy(() => import('../Pages/Contact/Contact'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Greeting />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Greeting />} />
        </Route>
      </Routes>
    </Container>
  );
};
