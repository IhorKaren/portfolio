import styled from 'styled-components';

export const TextList = styled.ul`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  max-height: 440px;
  padding: 10px 14px 140px 14px;

  gap: 8px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    border-right: 1px solid #1e2d3d;
  }

  @media screen and (min-width: 768px) {
    min-width: 700px;
    max-height: 100%;

    padding: 20px 20px 200px 40px;
  }
`;
