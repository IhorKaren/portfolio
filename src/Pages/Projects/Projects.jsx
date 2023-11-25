import { useState, useEffect } from 'react';
import Aside from 'components/Aside/Aside';
import Filter from 'components/Filter/Filter';
import { getAllProjects } from 'services/projectsApi';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await getAllProjects();

        setProjects([...response]);

        return;
      } catch (error) {
        console.log(error);
      }
    }

    getProjects();
  }, []);

  return (
    <>
      <Aside text="projects">
        <Filter />
      </Aside>
      {projects.length > 0 &&
        projects.map(el => {
          return <img key={el._id} src={el.preview} alt="" />;
        })}
    </>
  );
};

export default Projects;
