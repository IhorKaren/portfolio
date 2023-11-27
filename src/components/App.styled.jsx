import styled from '@emotion/styled';

import { css, keyframes } from '@emotion/react';

const animateGlow = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

export const textColor = keyframes`
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

export const borderColor = keyframes`
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

export const animateShadow = keyframes`
  0%{box-shadow: rgba(85, 101, 232, 0.4) -5px 5px, rgba(85, 101, 232, 0.3) -10px 10px, rgba(85, 101, 232, 0.2) -15px 15px, rgba(85, 101, 232, 0.1) -20px 20px, rgba(85, 101, 232, 0.05) -25px 25px;}
  50%{box-shadow: rgba(15, 255, 193, 0.4) -5px 5px, rgba(15, 255, 193, 0.3) -10px 10px, rgba(15, 255, 193, 0.2) -15px 15px, rgba(15, 255, 193, 0.1) -20px 20px, rgba(15, 255, 193, 0.05) -25px 25px;}
  100%{box-shadow: rgba(85, 101, 232, 0.4) -5px 5px, rgba(85, 101, 232, 0.3) -10px 10px, rgba(85, 101, 232, 0.2) -15px 15px, rgba(85, 101, 232, 0.1) -20px 20px, rgba(85, 101, 232, 0.05) -25px 25px;}
`;

export const backlight = (
  x,
  y,
  width,
  height,
  spread,
  size,
  colorA,
  colorB,
  duration
) => css`
  position: absolute;
  content: '';
  bottom: ${x};
  left: ${y};
  right: 0;
  width: ${width};
  height: ${height};
  transform: scale(${spread});
  filter: blur(${size});
  background: linear-gradient(270deg, ${colorA}, ${colorB});
  background-size: 200% 200%;
  animation: ${animateGlow} ${duration} ease infinite;
`;

export const Green = styled.span`
  color: #43d9ad;
`;

export const Blue = styled.span`
  color: #5565e8;
`;
export const Orange = styled.span`
  color: #fea55f;
`;

export const Violet = styled.span`
  color: #c98bdf;
`;

export const Gray = styled.span`
  color: #607b96;
`;
