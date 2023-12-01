import { Link, useLocation } from 'react-router-dom';
import {
  ProjectsStyledList,
  ProjectsItem,
  TitleWrap,
  Accent,
  ProjectTitle,
  IconsList,
  IconItem,
  Wrap,
} from './ProjectsList.styled';
import { Button } from 'components/App.styled';
import tagToIconConverter from 'services/tagToIconConverter';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import LazyImage from 'components/LazyImage/LazyImage';

const ProjectsList = ({ array, filter }) => {
  const [parent] = useAutoAnimate();

  const kebabTitleEdit = title => {
    return title.toLowerCase().split(' ').join('-');
  };

  const location = useLocation();
  const routeName = location.pathname.includes('/projects') ? '' : 'projects/';

  return (
    <ProjectsStyledList ref={parent}>
      {array.map((el, i) => {
        const { _id, name, preview, technologies } = el;

        const isItemShow =
          filter.length === 0 ||
          filter.every(tag => technologies.includes(tag));

        return (
          isItemShow && (
            <ProjectsItem key={_id}>
              <TitleWrap>
                <Accent>Project {i + 1}</Accent>
                <ProjectTitle>
                  <span>{'//'}</span> _{kebabTitleEdit(name)}
                </ProjectTitle>
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
