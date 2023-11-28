import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';
import { vars } from 'components/App.styled';

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 14px;

  @media screen and (min-width: 768px) {
    padding: 10px 14px 32px 14px;
  }
`;

export const Arrow = styled(BsChevronRight)`
  stroke-width: 2px;
  color: ${vars.primaryTextColor};

  transform: rotate(0);
  transition: transform ${vars.timingFunction};
`;

export const InfoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${vars.primaryTextColor};
  text-decoration: none;

  transition: color ${vars.timingFunction};

  &.active {
    color: ${vars.primaryWhiteColor};
  }

  &.active ${Arrow} {
    transform: rotate(90deg);
  }

  &:hover,
  &:focus {
    color: ${vars.primaryWhiteColor};
  }
`;
