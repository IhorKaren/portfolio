import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Bio from './Bio/Bio';

const Greeting = lazy(() => import('../Pages/Greeting/Greeting'));
const About = lazy(() => import('../Pages/About/About'));
const Projects = lazy(() => import('../Pages/Projects/Projects'));
const Contact = lazy(() => import('../Pages/Contact/Contact'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Greeting />} />
        <Route path="about" element={<About />}>
          <Route path="bio" element={<Bio />} />
          <Route path="interests" element={<Projects />} />
          <Route path="education" element={<Projects />} />
        </Route>
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Greeting />} />
      </Route>
    </Routes>
  );
};
