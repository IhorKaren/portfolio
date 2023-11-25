import styled from '@emotion/styled';

export const ProjectsStyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  row-gap: 60px;
  column-gap: 20px;
  justify-content: center;

  padding: 60px 14px 360px 14px;

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
    padding: 80px 30px 200px 0;
  }
`;

export const ProjectsItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 280px;

  border-radius: 15px;
  border: 1px solid #1e2d3d;

  background: #011627;

  &:last-of-type {
    align-self: flex-start;
    justify-self: flex-start;
  }
`;

export const TitleWrap = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  gap: 8px;
  transform: translateY(-100%);
  padding-bottom: 14px;
`;

export const Accent = styled.span`
  color: #5565e8;

  font-weight: 700;
`;

export const ProjectTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const ProjectImage = styled.img`
  border-radius: 15px 15px 0px 0px;
`;
