import { TitleWrap, Title } from './MenuTitle.styled';
import { BsCaretDownFill } from 'react-icons/bs';

const MenuTitle = ({title}) => {
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
