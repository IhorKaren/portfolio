import { useState, useEffect } from 'react';
import Aside from 'components/Aside/Aside';
import Filter from 'components/Filter/Filter';
import { PageContainer } from 'components/Container/Container.styled';
import ProjectsList from 'components/ProjectsList/ProjectsList';
import { getAllProjects } from 'services/projectsApi';
import CardSkeleton from 'components/CardSkeleton/CardSkeleton';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  useEffect(() => {
    async function getProjectsList() {
      try {
        const response = await getAllProjects();

        setProjects([...response]);

        return;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProjectsList();
  }, []);

  const onFilterChange = e => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedCheckboxes(p => [...p, value]);
    } else {
      setCheckedCheckboxes(checkedCheckboxes.filter(el => el !== value));
    }
  };

  return (
    <>
      <Aside text="projects">
        <Filter onChange={onFilterChange} />
      </Aside>
      <PageContainer>
        {isLoading ? (
          <CardSkeleton quantity={8} />
        ) : (
          <ProjectsList array={projects} filter={checkedCheckboxes} />
        )}
      </PageContainer>
    </>
  );
};

export default Projects;

// {projects.length > 0 && (
//   <ProjectsList array={projects} filter={checkedCheckboxes} />
// )}
// <CardSkeleton quantity={8} />
