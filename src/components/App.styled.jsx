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

export const backlight = (x, y, spread, size, colorA, colorB, duration) => css`
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
