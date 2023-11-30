import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from './Layout/Layout';
import Greeting from 'Pages/Greeting/Greeting';
import About from 'Pages/About/About';
import Bio from 'Pages/Bio/Bio';
import Interests from 'Pages/Interests/Interests';
import Education from 'Pages/Education/Education';
import Projects from 'Pages/Projects/Projects';
import Project from './Project/Project';
import Contact from 'Pages/Contact/Contact';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/greeting`);
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Greeting />} />
        <Route path="about" element={<About />}>
          <Route path="bio" element={<Bio />} />
          <Route path="interests" element={<Interests />} />
          <Route path="education" element={<Education />} />
        </Route>
        <Route path="projects" element={<Projects />}>
          <Route path=":projectID" element={<Project />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Greeting />} />
      </Route>
    </Routes>
  );
};
