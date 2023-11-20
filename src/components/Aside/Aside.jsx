import {
  PageAside,
  SubHeader,
  AsideNav,
  AsideNavList,
  AsideLink,
  ChildrenContainer,
  Wrap,
  HomeLink,
} from './Aside.styled';
import {
  BsXLg,
  BsTerminalFill,
  BsWindowFullscreen,
  BsPaletteFill,
  BsPersonBoundingBox,
} from 'react-icons/bs';

const Aside = ({ text, children }) => {
  return (
    <>
      <PageAside>
        <AsideNav>
          <AsideNavList>
            <li>
              <AsideLink to="/greeting">
                <BsTerminalFill size={28} />
              </AsideLink>
            </li>
            <li>
              <AsideLink to="/about">
                <BsWindowFullscreen size={28} />
              </AsideLink>
            </li>
            <li>
              <AsideLink to="/projects">
                <BsPaletteFill size={28} />
              </AsideLink>
            </li>
            <li>
              <AsideLink to="/contact">
                <BsPersonBoundingBox size={28} />
              </AsideLink>
            </li>
          </AsideNavList>
        </AsideNav>
        <ChildrenContainer>{children}</ChildrenContainer>
      </PageAside>
      <SubHeader>
        <Wrap>
          <p>{text}</p>
          <HomeLink to="/greeting">
            <BsXLg strokeWidth={1} size={14} />
          </HomeLink>
        </Wrap>
      </SubHeader>
    </>
  );
};

export default Aside;
