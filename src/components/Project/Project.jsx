import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';

import { BsXLg } from 'react-icons/bs';
import {
  BackDrop,
  ProjectWindow,
  CloseButton,
  Wrap,
  Title,
  LinksWrap,
  Text,
} from './Project.styled';
import LazyImage from 'components/LazyImage/LazyImage';
import { Button } from 'components/App.styled';

const Project = () => {
  const [project, setProject] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (project) {
      ReactGA.send({
        hitType: 'pageview',
        page: `/projects/${project._id}`,
        title: project.name,
      });
    }
  });

  useEffect(() => {
    setProject(location.state.object);
  }, [location]);

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
        {project && (
          <>
            <LazyImage
              src={project.preview}
              width={720}
              height={273}
              alt={project.name}
            />
            <Wrap>
              <Title>{project.name}</Title>
              <Text>{project.text}</Text>
              <LinksWrap>
                <Button
                  as={'a'}
                  href={project.links.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  repository
                </Button>
                {project.links.livepage && (
                  <Button
                    as={'a'}
                    href={project.links.livepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    livepage
                  </Button>
                )}
              </LinksWrap>
            </Wrap>
          </>
        )}
      </ProjectWindow>
    </BackDrop>
  );
};

export default Project;
