import styled from '@emotion/styled';

export const Decorate = styled.div`
  display: flex;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 100%;
  padding: 160px 15px 0 15px;


  border-left: 1px solid #1e2d3d;
`;

export const DecorateList = styled.ul`
  line-height: 1.5;
  font-size: 18px;
`;

export const DecorateItem = styled.li`
  display: flex;

  color: #5565e8;
`;

export const DecorateMessage = styled.p`
  max-width: 360px;
  max-height: 180px;
  overflow-y: auto;
  overflow-wrap: break-word;

  color: #fea55f;

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

  color: #607b96;
`;
