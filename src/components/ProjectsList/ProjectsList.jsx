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
        const isItemShow =
          filter.length === 0 || filter.every(tag => el.tags.includes(tag));

        return (
          isItemShow && (
            <ProjectsItem key={el._id}>
              <TitleWrap>
                <Accent>Project {i + 1}</Accent>
                <ProjectTitle>
                  <span>{'//'}</span> _{kebabTitleEdit(el.name)}
                </ProjectTitle>
              </TitleWrap>
              <LazyImage
                src={el.preview}
                width={338}
                height={129}
                alt={el.name}
              />
              <IconsList>
                {el.tags.map((el, index) => {
                  return (
                    <IconItem key={index}>{tagToIconConverter(el)}</IconItem>
                  );
                })}
              </IconsList>
              <Wrap>
                <Button
                  as={Link}
                  to={`${routeName}${el._id}`}
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
