import { TitleWrap, Title, InfoList, Arrow, InfoLink } from './Info.styled';
import { BsCaretDownFill, BsFillFolderFill } from 'react-icons/bs';

const Info = () => {
  return (
    <div>
      <TitleWrap>
        <Title>
          <BsCaretDownFill size={14} />
          personal-info
        </Title>
      </TitleWrap>
      <InfoList>
        <li>
          <InfoLink to="bio">
            <Arrow size={12} />
            <BsFillFolderFill color="#43d9ad" />
            bio
          </InfoLink>
        </li>
        <li>
          <InfoLink to="interests">
            <Arrow size={12} />
            <BsFillFolderFill color="#e99287" />
            interests
          </InfoLink>
        </li>
        <li>
          <InfoLink to="education">
            <Arrow size={12} />
            <BsFillFolderFill color="#3a49a4" />
            education
          </InfoLink>
        </li>
      </InfoList>
    </div>
  );
};

export default Info;
