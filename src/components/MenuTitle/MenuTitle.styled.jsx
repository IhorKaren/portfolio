import styled from 'styled-components';
import { vars } from 'components/App.styled';

export const TitleWrap = styled.div`
  width: 100%;
  padding: 10px 0 10px 14px;

  background-color: #1e2d3d;

  @media screen and (min-width: 768px) {
    background-color: transparent;
    border-bottom: ${vars.darkBorder};
  }
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${vars.primaryWhiteColor};

  font-weight: 400;
  font-size: 16px;
`;
