import { useState, useEffect } from 'react';
import Aside from 'components/Aside/Aside';
import Filter from 'components/Filter/Filter';
import { PageContainer } from 'components/Container/Container.styled';
import ProjectsList from 'components/ProjectsList/ProjectsList';
import { getAllProjects } from 'services/projectsApi';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjectsList() {
      try {
        const response = await getAllProjects();

        setProjects([...response].reverse());

        return;
      } catch (error) {
        console.log(error);
      }
    }

    getProjectsList();
  }, []);

  return (
    <>
      <Aside text="projects">
        <Filter />
      </Aside>
      <PageContainer>
        {projects.length > 0 && <ProjectsList array={projects} />}
      </PageContainer>
    </>
  );
};

export default Projects;
