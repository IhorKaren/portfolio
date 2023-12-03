import { BsCaretDownFill } from 'react-icons/bs';

import { TitleWrap, Title } from './MenuTitle.styled';

const MenuTitle = ({ title }) => {
  return (
    <TitleWrap>
      <Title>
        <BsCaretDownFill size={14} />
        {title}
      </Title>
    </TitleWrap>
  );
};

export default MenuTitle;
