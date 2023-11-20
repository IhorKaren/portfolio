import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

export const TitleWrap = styled.div`
  padding: 10px 14px;

  border-bottom: 1px solid #1e2d3d;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;

  font-weight: 400;
  font-size: 16px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 14px;
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

  &.active {
    color: #fff;
  }

  &.active ${Arrow} {
    transform: rotate(90deg);
  }
`;
