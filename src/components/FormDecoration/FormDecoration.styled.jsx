import styled from 'styled-components';
import { vars, animateShadow } from 'components/App.styled';

export const Decorate = styled.div`
  display: none;

  @media screen and (min-width: 1200px) {
    position: relative;
    display: flex;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;

    width: 100%;
    height: 100%;
    padding: 150px 15px 180px 15px;

    border-left: ${vars.darkBorder};

    overflow-y: scroll;
  }

  @media screen and (min-width: 1400px) {
    padding-bottom: 180px;
  }
`;

export const DecorateList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px 14px;
  height: max-content;
  gap: 4px;

  border-radius: 8px;
  border: ${vars.darkBorder};
  background-color: ${vars.secondaryBgColor};

  animation: ${animateShadow} ${vars.keyframeFunction};

  @media screen and (min-width: 1400px) {
    gap: 8px;
  }
`;

export const DecorateItem = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;

  z-index: 1;

  color: ${vars.accentBlue};

  font-size: 16px;

  @media screen and (min-width: 1400px) {
    font-size: 18px;
  }
`;

export const Pre = styled.pre`
  display: flex;
  flex-wrap: wrap;
`;

export const DecorateMessage = styled.p`
  max-width: 280px;
  max-height: 120px;
  overflow-y: auto;
  overflow-wrap: break-word;

  color: ${vars.accentOrange};
  font-size: 14px;

  ::-webkit-scrollbar {
    border: none;
  }

  @media screen and (min-width: 1400px) {
    max-width: 360px;
    max-height: 180px;

    font-size: 18px;
  }
`;

export const DecorateAreaMessage = styled(DecorateMessage)`
  max-width: 260px;
  max-height: 120px;
`;

export const DecorateNumber = styled.div`
  margin-right: 20px;

  color: ${vars.accentGray};
`;
