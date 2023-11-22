import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Greeting from 'Pages/Greeting/Greeting';
import About from 'Pages/About/About';
import Bio from 'Pages/Bio/Bio';
import Projects from 'Pages/Projects/Projects';
import Contact from 'Pages/Contact/Contact';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Greeting />} />
        <Route path="about" element={<About />}>
          <Route path="bio" element={<Bio />} />
          <Route path="interests" element={<div></div>} />
          <Route path="education" element={<div></div>} />
        </Route>
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Greeting />} />
      </Route>
    </Routes>
  );
};
