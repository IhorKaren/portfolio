import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 14px 32px 14px;
`;

export const Arrow = styled(BsChevronRight)`
  stroke-width: 2px;
  color: #607b96;

  transform: rotate(0);
  transition: transform 200ms linear;
`;

export const InfoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #607b96;
  text-decoration: none;

  transition: color 200ms linear;

  &.active {
    color: #fff;
  }

  &.active ${Arrow} {
    transform: rotate(90deg);
  }

  &:hover,
  &:focus {
    color: #fff;
  }
`;
