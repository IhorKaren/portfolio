import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 21px 0 21px;
  border-bottom: 1px solid #1e2d3d;

  @media screen and (min-width: 1024px) {
    height: auto;
    justify-content: flex-start;
    padding: 0 0 0 21px;

    backdrop-filter: blur(60px);
  }
`;

export const Name = styled.p`
  flex-shrink: 0;

  @media screen and (min-width: 1024px) {
    width: 278px;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  z-index: 6;
  top: 56px;
  right: 0;
  width: 375px;
  height: 100%;

  opacity: 0;

  transition: opacity 400ms linear;
  backdrop-filter: blur(60px);

  &.open {
    @media screen and (max-width: 1023px) {
      opacity: 1;
    }
  }

  @media screen and (max-width: 475px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    width: 100%;
    top: 0;
    right: 0;
    opacity: 1;
    display: flex;
  }
`;

export const NavList = styled.ul`
  @media screen and (min-width: 1024px) {
    width: 100%;
    display: flex;
  }
`;

export const NavItem = styled.li`
  position: relative;

  text-align: center;

  border-bottom: 1px solid #4d5bce;

  @media screen and (min-width: 1024px) {
    border-bottom: none;
    border-right: 1px solid #1e2d3d;

    text-align: start;

    &:first-of-type,
    &:last-of-type {
      border-left: 1px solid #1e2d3d;
    }

    &:last-of-type {
      margin-left: auto;
      border-right: none;
    }
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

    border-bottom: 1px solid #43d9ad;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 200ms linear, border-bottom 200ms linear;

    @media screen and (min-width: 1024px) {
      border-bottom: 2px solid #5565e8;

      transform-origin: center;
    }
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

    border-bottom: none;

    ::before {
      border-bottom: 1px solid #43d9ad;

      transform: scaleX(1);

      @media screen and (min-width: 1024px) {
        border-bottom: 2px solid #43d9ad;
      }
    }
  }
`;

export const MenuButton = styled.button`
  color: #607b96;
  background-color: transparent;
  
  border: none;

  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
