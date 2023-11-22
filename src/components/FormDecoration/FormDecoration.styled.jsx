import styled from '@emotion/styled';

export const DecorateList = styled.ul`
  height: 100%;
  padding-top: 160px;
  padding-left: 110px;
  padding-bottom: 160px;
  font-size: 18px;

  border-left: 1px solid #1e2d3d;
`;

export const DecorateItem = styled.li`
  display: flex;
`;

export const DecorateMessage = styled.p`
  max-width: 340px;
  max-height: 240px;
  overflow-y: auto;
  overflow-wrap: break-word;

  ::-webkit-scrollbar {
    background-color: #011627;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #607b96;
  }
`;

export const DecorateNumber = styled.span`
  margin-right: 30px;
`;
