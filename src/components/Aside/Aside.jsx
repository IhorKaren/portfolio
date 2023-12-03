import {
  BsXLg,
  BsTerminalFill,
  BsEnvelopeFill,
  BsEasel2Fill,
  BsPersonBoundingBox,
} from 'react-icons/bs';

import {
  PageAside,
  SubHeader,
  MobileSubHeader,
  AsideNav,
  AsideNavList,
  AsideLink,
  ChildrenContainer,
  Wrap,
  HomeLink,
} from './Aside.styled';

const Aside = ({ text, children }) => {
  return (
    <>
      <MobileSubHeader>
        <p>_{text}</p>
      </MobileSubHeader>
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
                <BsPersonBoundingBox size={28} />
              </AsideLink>
            </li>
            <li>
              <AsideLink to="/projects">
                <BsEasel2Fill size={28} />
              </AsideLink>
            </li>
            <li>
              <AsideLink to="/contact">
                <BsEnvelopeFill size={28} />
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
