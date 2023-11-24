import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const PageAside = styled.aside`
  background-color: #011627;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 0;
    display: flex;
    height: 100%;
    width: 260px;

    border-right: 1px solid #1e2d3d;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const AsideNav = styled.nav`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    border-right: 1px solid #1e2d3d;
    background-color: #011627;
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
    color: #fff;
  }

  &:hover,
  &:focus {
    color: #fff;
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

    border-bottom: 1px solid #1e2d3d;
  }
`;

export const MobileSubHeader = styled.div`
  padding: 21px 27px;

  color: #fff;
  font-size: 14px;

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

  border-right: 1px solid #1e2d3d;
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
