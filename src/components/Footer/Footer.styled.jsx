import styled from 'styled-components';

export const PageFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  gap: 18px;
  align-items: center;
  padding: 0 0 0 22px;
  z-index: 6;

  border-top: 1px solid #1e2d3d;
  background-color: #011627;
`;

export const Hint = styled.p`
  flex-shrink: 0;
`;

export const SocialsList = styled.ul`
  width: 100%;
  display: flex;
`;

export const SocialListItem = styled.li`
  border-right: 1px solid #1e2d3d;

  &:first-child,
  &:last-child {
    border-left: 1px solid #1e2d3d;
  }

  &:last-child {
    margin-left: auto;
    border-right: none;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 11px 14px;

  color: #607b96;

  text-decoration: none;

  transition: color 200ms linear;

  &:hover {
    color: #ffffff;
  }
`;
