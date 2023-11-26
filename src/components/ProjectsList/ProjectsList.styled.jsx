import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const animateGlow = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const textColor = keyframes`
   0% {
      color: #5565E8;
    }
    50% {
      color: #0fffc1;
    }
    100% {
      color: #5565E8;
    }
`;

const borderColor = keyframes`
   0% {
      border-color: #5565E8;
    }
    50% {
      border-color: #0fffc1;
    }
    100% {
      border-color: #5565E8;
    }
`;

const backlight = (x, y, spread, size, colorA, colorB, duration) => css`
  position: absolute;
  content: '';
  bottom: ${x};
  left: ${y};
  right: 0;
  height: 100%;
  width: 100%;
  transform: scale(${spread});
  filter: blur(${size});
  background: linear-gradient(270deg, ${colorA}, ${colorB});
  background-size: 200% 200%;
  animation: ${animateGlow} ${duration} ease infinite;
`;

export const ProjectsStyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  row-gap: 60px;
  column-gap: 30px;
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
    padding: 80px 30px 200px 30px;
  }
`;

export const ProjectsItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 280px;
  border-radius: 15px;

  border-radius: 15px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border: 1px solid #1e2d3d;

  &::after {
    ${backlight('-13%', 'center', '0.7', '12vw', '#0fffc1', '#7e0fff', '10s')}

    @media screen and (min-width: 768px) {
      ${backlight('-13%', 'center', '0.7', '8vw', '#0fffc1', '#7e0fff', '10s')}
    }

    @media screen and (min-width: 1024px) {
      ${backlight('-15%', 'center', '0.6', '5vw', '#0fffc1', '#7e0fff', '10s')}
    }
  }
`;
export const Wrap = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  z-index: 1;
  padding: 20px 30px;

  background-color: #011627;

  border-radius: 0px 0px 15px 15px;
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
  animation: ${textColor} 10s ease infinite;
  font-weight: 700;
`;

export const ProjectTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const ProjectImage = styled.img`
  border-radius: 15px 15px 0px 0px;
  z-index: 1;
`;

export const IconsList = styled.ul`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  display: flex;
  gap: 10px;

  color: #000;
`;

export const IconItem = styled.li`
  display: flex;

  border-radius: 4px;

  overflow: hidden;
`;

export const Button = styled.button`
  padding: 10px 14px;

  border-radius: 8px;
  border: 1px solid transparent;

  color: #fff;
  background-color: #1c2b3a;

  transition: background-color 200ms linear, color 200ms linear;
  animation: ${borderColor} 10s ease infinite;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #607b96;
    background-color: transparent;
  }
`;
