import styled from '@emotion/styled';

export const PageFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  gap: 18px;
  align-items: center;
  padding: 0;
  z-index: 3;

  border-top: 1px solid #1e2d3d;

  @media screen and (min-width: 475px) {
    padding: 0 0 0 22px;
  }
`;

export const Hint = styled.p`
  display: none;
  flex-shrink: 0;

  @media screen and (min-width: 475px) {
    display: block;
  }
`;

export const SocialsList = styled.ul`
  width: 100%;
  display: flex;
`;

export const SocialListItem = styled.li`
  border-right: 1px solid #1e2d3d;

  &:last-of-type {
    border-left: 1px solid #1e2d3d;
  }

  &:last-of-type {
    margin-left: auto;
    border-right: none;
  }

  @media screen and (min-width: 475px) {
    &:first-of-type {
      border-left: 1px solid #1e2d3d;
    }
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
