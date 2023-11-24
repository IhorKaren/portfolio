import styled from '@emotion/styled';

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    background-color: #011627;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #607b96;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    overflow-y: hidden;
  }
`;
