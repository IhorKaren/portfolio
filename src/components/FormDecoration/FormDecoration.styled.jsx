import styled from '@emotion/styled';

export const Decorate = styled.div`
  display: none;

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;

    width: 100%;
    height: 100%;
    padding: 140px 15px 0 15px;

    border-left: 1px solid #1e2d3d;
  }
`;

export const DecorateList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const DecorateItem = styled.li`
  display: flex;
  align-items: center;

  color: #5565e8;

  line-height: 1.5;
  font-size: 16px;

  @media screen and (min-width: 1400px) {
    font-size: 18px;
  }
`;

export const DecorateText = styled.pre`
  display: flex;
  flex-wrap: wrap;
`;

export const DecorateMessage = styled.p`
  max-width: 195px;
  max-height: 120px;
  overflow-y: auto;
  overflow-wrap: break-word;

  color: #fea55f;
  font-size: 14px;

  ::-webkit-scrollbar {
    background-color: #011627;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #607b96;
  }

  @media screen and (min-width: 1400px) {
    max-width: 360px;
    max-height: 180px;

    font-size: 18px;
  }
`;

export const DecorateAreaMessage = styled(DecorateMessage)`
  max-width: 170px;
  max-height: 120px;
`;

export const DecorateNumber = styled.span`
  margin-right: 30px;

  color: #607b96;
`;
