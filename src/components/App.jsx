import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Layout from './Layout/Layout';
import Greeting from 'Pages/Greeting/Greeting';
import About from 'Pages/About/About';
import Bio from 'Pages/Bio/Bio';
import Interests from 'Pages/Interests/Interests';
import Education from 'Pages/Education/Education';
import Projects from 'Pages/Projects/Projects';
import Project from './Project/Project';
import Contact from 'Pages/Contact/Contact';

const TRACKING_ID = 'G-YDPEDH163E';
ReactGA.initialize(TRACKING_ID);

export const App = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: location.pathname,
    });

    console.log('render');
  }, [isFirstRender, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Greeting />} />
        <Route path="about" element={<About />}>
          <Route index element={<Bio />} />
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
