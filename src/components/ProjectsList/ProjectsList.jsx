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

const ProjectsList = ({ array }) => {
  const kebabTitleEdit = title => {
    return title.toLowerCase().split(' ').join('-');
  };

  return (
    <ProjectsStyledList>
      {array.map((el, i) => {
        return (
          <ProjectsItem key={el._id}>
            <TitleWrap>
              <Accent>Project {i + 1}</Accent>
              <ProjectTitle>
                <span>{'//'}</span> _{kebabTitleEdit(el.name)}
              </ProjectTitle>
            </TitleWrap>
            <ProjectImage src={el.preview} width={358} alt="" />
            <IconsList>
              {el.tags.map((el, i) => {
                return <IconItem key={i}>{tagToIconConverter(el)}</IconItem>;
              })}
            </IconsList>
            <Wrap>
              <Button type="button">project-info</Button>
            </Wrap>
          </ProjectsItem>
        );
      })}
    </ProjectsStyledList>
  );
};

export default ProjectsList;
