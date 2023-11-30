import styled from 'styled-components';
import { vars } from 'components/App.styled';
import { Link } from 'react-router-dom';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 1200;
  opacity: 1;
`;

export const ProjectWindow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 600px;

  border-radius: 15px;
  border: 1px solid #1e2d3d;

  background: #011221;
`;

export const CloseButton = styled(Link)`
  position: absolute;
  top: 15px;
  right: 15px;

  color: ${vars.primaryTextColor};

  text-decoration: none;
`;
