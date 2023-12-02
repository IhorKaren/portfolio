import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Aside from 'components/Aside/Aside';
import Filter from 'components/Filter/Filter';
import { PageContainer } from 'components/Container/Container.styled';
import ProjectsList from 'components/ProjectsList/ProjectsList';
import { getAllProjects } from 'services/api';
import Skeleton from 'components/Skeleton/Skeleton';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);
  const [parent] = useAutoAnimate();

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
      <h1 className="visually-hidden">My projects</h1>
      <Aside text="projects">
        <Filter onChange={onFilterChange} />
      </Aside>
      <PageContainer>
        {isLoading ? (
          <Skeleton quantity={12} />
        ) : (
          <ProjectsList array={projects} filter={checkedCheckboxes} />
        )}
        <div ref={parent}>
          <Outlet />
        </div>
      </PageContainer>
    </>
  );
};

export default Projects;
