import styled from 'styled-components';
import { vars } from 'components/App.styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  border-radius: 8px;
  border: ${vars.darkBorder};
  background-color: ${vars.primaryBgColor};

  overflow: hidden;
`;

export const PageContainer = styled.section`
  height: 100%;
  border-top: ${vars.darkBorder};

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-left: 260px;

    border-top: none;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 300px;
    margin-left: auto;
  }
`;
