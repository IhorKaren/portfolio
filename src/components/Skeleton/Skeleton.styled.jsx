import styled, { keyframes } from 'styled-components';
import { vars, backlight } from 'components/App.styled';

const skeletonLoading = keyframes`
    0% {
      background-color: rgb(97, 97, 97);
    }
    100% {
      background-color: rgb(54, 54, 54);
    }
  `;

export const SkeletonList = styled.div`
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

export const SkeletonCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 280px;

  border-radius: 15px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border: ${vars.darkBorder};

  &::after {
    ${backlight(
      '-13%',
      'center',
      '100%',
      '100%',
      '0.7',
      '12vw',
      '#0fffc1',
      '#7e0fff',
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
        '#0fffc1',
        '#7e0fff',
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
        '#0fffc1',
        '#7e0fff',
        '10s'
      )}
    }
  }
`;

export const SkeletonTitleWrap = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  gap: 8px;
  transform: translateY(-100%);
  padding-bottom: 14px;
`;

export const SkeletonTitle = styled.div`
  width: 200px;
  height: 21px;

  border-radius: 8px;

  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export const SkeletonImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 338px;
  height: 129px;
  flex-shrink: 0;
  border-radius: 15px 15px 0 0;

  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export const SkeletonWrap = styled.div`
  display: flex;
  height: 100%;
  z-index: 1;
  align-items: flex-end;

  padding: 20px 20px;

  background-color: ${vars.primaryBgColor};

  border-radius: 0 0 15px 15px;
`;

export const SkeletonButton = styled.div`
  width: 130px;
  height: 41px;

  border-radius: 8px;

  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
