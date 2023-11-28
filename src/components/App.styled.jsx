import styled, { css, keyframes } from 'styled-components';

export const vars = {
  fontFamily: 'FiraCode',
  primaryTextColor: '#607b96',
  secondaryTextcolor: '#465e77',
  primaryWhiteColor: '#ffffff',
  primaryBgColor: '#011627',
  secondaryBgColor: '#011221',
  timingFunction: '200ms linear',
  keyframeFunction: '10s ease infinite',
  darkBorder: '1px solid #1e2d3d',
  accentBlue: '#5565E8',
  accentGreen: '#0fffc1',
  accentOrange: '#FEA55F',
  accentViolet: '#c98bdf',
  accentGray: '#607b96',
  accentBlueRGB: '85, 101, 232,',
  accentGreenRGB: '15, 255, 193,',
};

const animateGlow = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

export const textColor = keyframes`
   0% {
      color: ${vars.accentBlue};
    }
    50% {
      color: ${vars.accentGreen};
    }
    100% {
      color: ${vars.accentBlue};
    }
`;

export const borderColor = keyframes`
   0% {
      border-color: ${vars.accentBlue};
    }
    50% {
      border-color: ${vars.accentGreen};
    }
    100% {
      border-color: ${vars.accentBlue};
    }
`;

export const animateShadow = keyframes`
  0%{box-shadow: rgba(${vars.accentBlueRGB} 0.4) 0 12px 17px 0;}
  50%{box-shadow: rgba(${vars.accentGreenRGB} 0.4) 0 12px 17px 0;}
  100%{box-shadow: rgba(${vars.accentBlueRGB} 0.4) 0 12px 17px 0;}
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

const Span = styled.span`
  display: inline-flex;
`;

export const Green = styled(Span)`
  color: ${vars.accentGreen};
`;

export const Blue = styled(Span)`
  color: ${vars.accentBlue};
`;
export const Orange = styled(Span)`
  color: ${vars.accentOrange};
`;

export const Violet = styled(Span)`
  color: ${vars.accentViolet};
`;

export const Gray = styled(Span)`
  color: ${vars.accentGray};
`;
