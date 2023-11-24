import styled from '@emotion/styled';

export const TextList = styled.ul`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  max-height: 440px;
  padding: 10px 14px 140px 14px;

  gap: 8px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: #011627;
    width: 8px;

    border-left: 1px solid #1e2d3d;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #607b96;
  }

  @media screen and (min-width: 768px) {
    height: 100vh;
    max-height: 100%;
    padding: 20px 20px 240px 0;
  }
`;
