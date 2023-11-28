import styled, { keyframes } from 'styled-components';

const float = keyframes`
 0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(8000px, 4000px);
    }
 `;

export const Scene = styled.ul`
  z-index: 4;

  & .img {
    position: absolute;
    height: 100000px;
    width: 100000px;
    top: -8500px;
    left: -8000px;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
    animation: ${float};
    animation-iteration-count: infinite;
    pointer-events: none;
  }

  & #img-1 {
    opacity: 0.02;
    background: url('https://image.ibb.co/jcTvpv/dust1.jpg');
    background-repeat: repeat;
    animation-duration: 250s;
    filter: brightness(15);
  }

  & #img-2 {
    opacity: 0.01;
    background: url('https://image.ibb.co/goU1Uv/dust2.jpg');
    background-repeat: repeat;
    animation-duration: 200s;
    filter: brightness(5);
  }

  & #img-3 {
    opacity: 0.02;
    background: url('https://image.ibb.co/cymRwa/dust3.jpg');
    background-repeat: repeat;
    animation-duration: 150s;
    filter: brightness(5);
  }
`;
