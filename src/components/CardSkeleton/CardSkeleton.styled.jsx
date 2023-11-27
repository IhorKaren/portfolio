import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const skeletonLoading = keyframes`
    0% {
      background-color: rgb(156, 156, 156);
    }
    100% {
      background-color: rgb(92, 92, 92);
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

export const SkeletonCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 280px;

  border-radius: 15px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border: 1px solid #1e2d3d;
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
  z-index: 1;
  width: 338px;
  height: 129px;
  flex-shrink: 0;
  border-radius: 15px 15px 0 0;

  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export const SkeletonWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;

  padding: 20px 20px;
`;

export const SkeletonButton = styled.div`
  width: 95px;
  height: 37px;

  border-radius: 8px;

  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
