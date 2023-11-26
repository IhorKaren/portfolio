import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  border-radius: 8px;
  border: 1px solid #1e2d3d;
  background-color: #011627;

  overflow: hidden;
`;

export const PageContainer = styled.div`
  height: 100%;
  border-top: 1px solid #1e2d3d;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-left: 300px;

    border-top: none;
  }

  @media screen and (min-width: 1200px) {
    margin-left: auto;
  }
`;
