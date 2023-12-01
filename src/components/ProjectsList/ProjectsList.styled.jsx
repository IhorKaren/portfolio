import styled from 'styled-components';
import { textColor, backlight, vars } from 'components/App.styled';

export const ProjectsStyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  row-gap: 60px;
  column-gap: 30px;
  justify-content: center;
  padding: 60px 14px 360px 14px;

  overflow-y: auto;

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
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border: ${vars.darkBorder};
  transform: scale(1);
  transition: transform ${vars.timingFunction};

  &:hover {
    transform: scale(1.01);
  }

  &::after {
    ${backlight(
      '-13%',
      'center',
      '100%',
      '100%',
      '0.7',
      '12vw',
      `${vars.accentGray}`,
      `${vars.accentBlue}`,
      '10s'
    )}

    @media screen and (min-width: 768px) {
      ${backlight(
        '-13%',
        'center',
        '100%',
        '100%',
        '0.7',
        '8vw',
        `${vars.accentGray}`,
        `${vars.accentBlue}`,
        '10s'
      )}
    }

    @media screen and (min-width: 1024px) {
      ${backlight(
        '-15%',
        '-10px',
        '100%',
        '100%',
        '0.6',
        '5vw',
        `${vars.accentGray}`,
        `${vars.accentBlue}`,
        '10s'
      )}
    }
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

export const Wrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  z-index: 1;
  padding: 10px 14px;

  background-color: ${vars.primaryBgColor};

  border-radius: 0 0 15px 15px;
  overflow: hidden;
`;

export const TextWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: auto;
`;

export const Type = styled.p`
  font-size: 14px;
`;

export const Accent = styled.span`
  animation: ${textColor} ${vars.keyframeFunction};
  font-weight: 700;
`;

export const ProjectTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const ProjectImage = styled.img`
  z-index: 1;
  border-radius: 14px 14px 0 0;
`;

export const IconsList = styled.ul`
  position: absolute;
  top: 10px;
  right: 14px;
  z-index: 3;
  display: flex;
  gap: 10px;
`;

export const IconItem = styled.li`
  display: flex;

  border-radius: 4px;
  color: #000;

  overflow: hidden;
`;
