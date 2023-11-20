import { InfoList, Arrow, InfoLink } from './Info.styled';
import {  BsFillFolderFill } from 'react-icons/bs';
import MenuTitle from 'components/MenuTitle/MenuTitle';

const Info = () => {
  return (
    <div>
      <MenuTitle title="personal-info" />
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
