import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 0 0 21px;

  border-bottom: 1px solid #1e2d3d;
  background-color: #011627;
`;

export const Name = styled.p`
  width: 278px;
  flex-shrink: 0;
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  position: relative;
  border-right: 1px solid #1e2d3d;

  &:first-of-type,
  &:last-of-type {
    border-left: 1px solid #1e2d3d;
  }

  &:last-of-type {
    margin-left: auto;
    border-right: none;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 17px 32px;
  color: #607b96;

  text-decoration: none;

  transition: color 200ms linear;

  &::before {
    content: '';
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;

    transform: scaleX(0);
    transition: transform 200ms linear;

    border-bottom: 2px solid #5565e8;
  }

  &:hover,
  &:focus {
    color: #fff;
  }

  &:hover::before,
  &:focus::before {
    transform: scaleX(1);
  }

  &.active {
    color: #fff;
  }

  &.active::before {
    transform: scaleX(1);
  }
`;
