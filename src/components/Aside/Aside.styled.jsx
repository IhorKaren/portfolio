import styled from 'styled-components';
import { vars } from 'components/App.styled';
import { Link, NavLink } from 'react-router-dom';

export const PageAside = styled.aside`
  background-color: ${vars.primaryBgColor};

  overflow: hidden;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 0;
    display: flex;
    height: 100%;
    width: 260px;

    border-right: ${vars.darkBorder};
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const AsideNav = styled.nav`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    border-right: ${vars.darkBorder};
    background-color: ${vars.primaryBgColor};
  }
`;

export const AsideNavList = styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: column;
  padding-top: 10px;
`;

export const AsideLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 11px 12px;

  color: #607b96;

  transition: color 200ms linear;

  &.active {
    color: ${vars.primaryWhiteColor};
  }

  &:hover,
  &:focus {
    color: ${vars.primaryWhiteColor};
  }
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SubHeader = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;

    padding-left: 300px;

    border-bottom: ${vars.darkBorder};
  }
`;

export const MobileSubHeader = styled.div`
  padding: 21px 27px;

  color: #fff;
  font-size: 14px;
  letter-spacing: 0.05rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 50px;
  padding: 10px 14px;

  border-right: ${vars.darkBorder};
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;

  color: #607b96;
  text-decoration: none;

  transition: color 200ms linear;

  &:hover,
  &:focus {
    color: #fff;
  }
`;
