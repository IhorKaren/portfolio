import styled from 'styled-components';
import { vars } from 'components/App.styled';

export const Thumb = styled.div`
  position: relative;
  z-index: 5;
  display: flex;

  flex-direction: column;

  gap: 120px;

  padding: 95px 27px 27px 27px;
  align-content: space-around;

  @media screen and (min-width: 768px) {
    padding-top: 200px;
    padding-left: 15%;
    gap: 80px;
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
  gap: 10px;
  margin-bottom: 10px;
`;

export const LinkThumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Link = styled.a`
  text-decoration: none;

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
  filter: blur(87px);

  @media screen and (min-width: 475px) {
    left: 50%;
    top: 15%;
    width: 454px;
    height: 492px;
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
  filter: blur(87px);

  @media screen and (min-width: 475px) {
    left: 50%;
    top: 30%;
    width: 454px;
    height: 492px;
    transform: translateX(50%);
  }
`;
