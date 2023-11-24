import styled from '@emotion/styled';

export const PageWrap = styled.div`
  height: 100%;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding: 0 0 0 340px;
  }
`;

export const TextList = styled.ul`
  position: relative;
  display: inline-flex;
  width: 100%;
  max-height: 380px;

  flex-direction: column;
  gap: 8px;

  padding: 10px 14px 100px 14px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: #011627;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #607b96;
  }

  @media screen and (min-width: 768px) {
    height: 100vh;
    max-height: 100%;
    padding: 20px 20px 140px 0;

    /* border-right: 1px solid #1e2d3d; */
  }
`;
