import { BsFillFolderFill } from 'react-icons/bs';

import { InfoList, Arrow, InfoLink } from './Info.styled';
import MenuTitle from 'components/MenuTitle/MenuTitle';
import { Green, Orange, Blue } from 'components/App.styled';

const Info = () => {
  const size = 12;

  return (
    <div>
      <MenuTitle title="personal-info" />
      <InfoList>
        <li>
          <InfoLink to="bio">
            <Arrow size={size} data="arrow" />
            <Green>
              <BsFillFolderFill />
            </Green>
            bio
          </InfoLink>
        </li>
        <li>
          <InfoLink to="interests">
            <Arrow size={size} />
            <Orange>
              <BsFillFolderFill />
            </Orange>
            interests
          </InfoLink>
        </li>
        <li>
          <InfoLink to="education">
            <Arrow size={size} />
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
