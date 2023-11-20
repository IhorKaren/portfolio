import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageAside = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;

  border-right: 1px solid #1e2d3d;
  background-color: #011627;
`;

export const SubHeader = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  right: 0;
  padding-left: 300px;

  border-bottom: 1px solid #1e2d3d;
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
