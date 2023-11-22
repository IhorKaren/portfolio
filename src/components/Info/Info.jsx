import { InfoList, Arrow, InfoLink } from './Info.styled';
import { BsFillFolderFill } from 'react-icons/bs';
import MenuTitle from 'components/MenuTitle/MenuTitle';
import { Green, Orange, Blue } from 'components/App.styled';

const Info = () => {
  return (
    <div>
      <MenuTitle title="personal-info" />
      <InfoList>
        <li>
          <InfoLink to="bio">
            <Arrow size={12} data="arrow" />
            <Green>
              <BsFillFolderFill />
            </Green>
            bio
          </InfoLink>
        </li>
        <li>
          <InfoLink to="interests">
            <Arrow size={12} />
            <Orange>
              <BsFillFolderFill />
            </Orange>
            interests
          </InfoLink>
        </li>
        <li>
          <InfoLink to="education">
            <Arrow size={12} />
            <Blue>
              <BsFillFolderFill />
            </Blue>
            education
          </InfoLink>
        </li>
      </InfoList>
    </div>
  );
};

export default Info;
