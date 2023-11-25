import {
  ProjectsStyledList,
  ProjectsItem,
  TitleWrap,
  Accent,
  ProjectTitle,
  ProjectImage,
} from './ProjectsList.styled';

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
            <ProjectImage src={el.preview} alt="" />
          </ProjectsItem>
        );
      })}
    </ProjectsStyledList>
  );
};

export default ProjectsList;
