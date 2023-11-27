import {
  ProjectsStyledList,
  ProjectsItem,
  TitleWrap,
  Accent,
  ProjectTitle,
  ProjectImage,
  IconsList,
  IconItem,
  Button,
  Wrap,
} from './ProjectsList.styled';
import tagToIconConverter from 'services/tagToIconConverter';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const ProjectsList = ({ array, filter }) => {
  const [parent] = useAutoAnimate();

  const kebabTitleEdit = title => {
    return title.toLowerCase().split(' ').join('-');
  };

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
              <ProjectImage src={el.preview} width={358} alt="" />
              <IconsList>
                {el.tags.map((el, index) => {
                  return (
                    <IconItem key={index}>{tagToIconConverter(el)}</IconItem>
                  );
                })}
              </IconsList>
              <Wrap>
                <Button type="button">project-info</Button>
              </Wrap>
            </ProjectsItem>
          )
        );
      })}
    </ProjectsStyledList>
  );
};

export default ProjectsList;
