import { Link, useLocation } from 'react-router-dom';
import tagToIconConverter from 'services/tagToIconConverter';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import {
  ProjectsStyledList,
  ProjectsItem,
  TitleWrap,
  Accent,
  ProjectTitle,
  IconsList,
  IconItem,
  Wrap,
  TextWrap,
  Type,
} from './ProjectsList.styled';
import { Blue } from 'components/App.styled';
import { Button } from 'components/App.styled';
import LazyImage from 'components/LazyImage/LazyImage';

const ProjectsList = ({ array, filter }) => {
  const [parent] = useAutoAnimate();

  const kebabTextEdit = title => {
    return title.toLowerCase().split(' ').join('-');
  };

  const location = useLocation();
  const routeName = location.pathname.includes('/projects') ? '' : 'projects/';

  return (
    <ProjectsStyledList ref={parent}>
      {array.map((el, i) => {
        const { _id, name, preview, description, type, technologies } = el;

        const isItemShow =
          filter.length === 0 ||
          filter.every(tag => technologies.includes(tag));

        return (
          isItemShow && (
            <ProjectsItem key={_id}>
              <TitleWrap>
                <Accent>Project {i + 1}</Accent>
                <span>{'//'}</span>
                <ProjectTitle>_{kebabTextEdit(name)}</ProjectTitle>
              </TitleWrap>
              <LazyImage src={preview} width={338} height={129} alt={name} />
              <IconsList>
                {technologies.map((el, index) => {
                  return (
                    <IconItem key={index}>{tagToIconConverter(el)}</IconItem>
                  );
                })}
              </IconsList>
              <Wrap>
                <TextWrap>
                  <p>{description}</p>
                  <Type>
                    <Blue>_{kebabTextEdit(type)}</Blue>
                  </Type>
                </TextWrap>
                <Button
                  as={Link}
                  to={`${routeName}${_id}`}
                  state={{ object: el, from: location }}
                >
                  project-info
                </Button>
              </Wrap>
            </ProjectsItem>
          )
        );
      })}
    </ProjectsStyledList>
  );
};

export default ProjectsList;
