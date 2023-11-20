import styled from 'styled-components';

export const Thumb = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 80px;
  padding-top: 200px;
  padding-left: 15%;

  align-content: space-around;
`;

export const Caption = styled.p`
  color: #e5e9f0;
  font-size: 18px;
`;

export const MainTitle = styled.h1`
  color: #e5e9f0;
  font-size: 62px;
  font-weight: 400;
`;

export const SubTitle = styled.h2`
  color: #4d5bce;
  font-size: 32px;
  font-weight: 400;
`;

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

export const LinkThumb = styled.div`
  display: flex;
  gap: 8px;
`;

export const Link = styled.a`
  text-decoration: none;

  color: #e99287;

  transition: color 200ms linear;

  &:hover {
    color: #ffffff;
  }
`;

export const AccentColor = styled.span`
  color: #43d9ad;

  &:first-child {
    color: #4d5bce;
  }

  &:last-child {
    color: #ffffff;
  }
`;

export const Decoration = styled.div`
  width: 100%;
  height: 100%;
`;

export const Green = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  z-index: 8;
  width: 454px;
  height: 492px;
  transform: rotate(-94.305deg);
  border-radius: 100% 20%;
  background: #43d9ad;
  opacity: 0.4;
  filter: blur(87px);
`;

export const Blue = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  z-index: 7;
  width: 454px;
  height: 492px;
  transform: rotate(13.508deg);
  transform: translateX(50%);
  background: #4d5bce;
  opacity: 0.4;
  filter: blur(87px);
`;
