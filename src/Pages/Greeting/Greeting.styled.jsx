import styled, { keyframes } from 'styled-components';
import { vars } from 'components/App.styled';

export const animateBgBlue = keyframes`
  0% {
      background: ${vars.accentBlue};
    }
    25% {
      background: ${vars.accentGreen};
    }
    75% {
      background: ${vars.accentViolet};
    }
    100% {
      background: ${vars.accentBlue};
    }
`;

export const animateBgGreen = keyframes`
  0% {
      background: ${vars.accentGreen};
    }
    25% {
      background: ${vars.accentViolet};
    }
    75% {
      background: ${vars.accentBlue};
    }
    100% {
      background: ${vars.accentGreen};
    }
`;

export const Thumb = styled.div`
  position: relative;
  z-index: 5;
  display: flex;

  flex-direction: column;

  gap: 80px;

  padding: 95px 14px 10px 14px;
  align-content: space-around;

  @media screen and (min-width: 768px) {
    padding: 160px 27px 27px 27px;
    padding-left: 15%;
    gap: 120px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 200px;
  }
`;

export const Caption = styled.p`
  color: #e5e9f0;
  font-size: 18px;
`;

export const MainTitle = styled.h1`
  color: #e5e9f0;
  font-size: 54px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 62px;
  }
`;

export const SubTitle = styled.h2`
  color: ${vars.accentBlue};
  font-size: 28px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const LinkItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Link = styled.a`
  text-decoration: none;
  overflow-y: auto;
  overflow-wrap: break-word;
  color: ${vars.accentOrange};

  transition: color ${vars.timingFunction};

  &:hover {
    color: #ffffff;
  }
`;

export const Decoration = styled.div`
  width: 100%;
  height: 100%;
`;

export const GreenStain = styled.div`
  position: absolute;
  left: 0;
  top: 15%;
  z-index: 4;
  width: 255px;
  height: 277px;

  transform: rotate(-94.305deg);
  border-radius: 100% 20%;
  background: ${vars.accentGreen};
  opacity: 0.4;
  filter: blur(97px);

  @media screen and (min-width: 475px) {
    left: 50%;
    top: 15%;
    width: 454px;
    height: 492px;
  }

  @media screen and (min-width: 768px) {
    animation: ${animateBgBlue} 30s ease infinite;
  }
`;

export const BlueStain = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  z-index: 3;
  width: 255px;
  height: 277px;

  transform: rotate(13.508deg);

  background: ${vars.accentBlue};
  opacity: 0.4;
  filter: blur(97px);

  @media screen and (min-width: 475px) {
    left: 50%;
    top: 30%;
    width: 454px;
    height: 492px;
    transform: translateX(50%);
  }

  @media screen and (min-width: 768px) {
    animation: ${animateBgGreen} 30s ease infinite;
  }
`;
