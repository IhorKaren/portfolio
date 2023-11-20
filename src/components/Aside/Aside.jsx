import { PageAside, SubHeader, Wrap, HomeLink } from './Aside.styled';
import { BsXLg } from 'react-icons/bs';

const Aside = ({ text, children }) => {
  return (
    <>
      <PageAside>{children}</PageAside>
      <SubHeader>
        <Wrap>
          <p>{text}</p>
          <HomeLink to="/greeting">
            <BsXLg strokeWidth={1} size={14}/>
          </HomeLink>
        </Wrap>
      </SubHeader>
    </>
  );
};

export default Aside;
