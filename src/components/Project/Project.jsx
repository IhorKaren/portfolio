import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BsXLg } from 'react-icons/bs';
import { BackDrop, ProjectWindow, CloseButton } from './Project.styled';

const Project = () => {
  const [project, setProject] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setProject(location.state.object);
  }, [location]);

  console.log(project);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      navigate(backLinkLocationRef.current);
    }
  };

  return (
    <BackDrop onClick={handleBackDropClick}>
      <ProjectWindow>
        <CloseButton to={backLinkLocationRef.current}>
          <BsXLg strokeWidth={1} size={18} />
        </CloseButton>
      </ProjectWindow>
    </BackDrop>
  );
};

export default Project;
