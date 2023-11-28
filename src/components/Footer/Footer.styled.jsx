import styled from 'styled-components';
import { vars } from 'components/App.styled';

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

  border-top: ${vars.darkBorder};

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
  border-right: ${vars.darkBorder};

  &:last-of-type {
    border-left: ${vars.darkBorder};
  }

  &:last-of-type {
    margin-left: auto;
    border-right: none;
  }

  @media screen and (min-width: 475px) {
    &:first-of-type {
      border-left: ${vars.darkBorder};
    }
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 11px 14px;

  color: ${vars.primaryTextColor};

  text-decoration: none;

  transition: ${vars.timingFunction};

  &:hover {
    color: ${vars.primaryWhiteColor};
  }
`;
