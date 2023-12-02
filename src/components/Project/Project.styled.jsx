import styled from 'styled-components';
import { vars } from 'components/App.styled';
import { Link } from 'react-router-dom';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 14px;
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
  position: relative;
  width: 100%;
  max-width: 720px;

  border-radius: 15px;
  border: ${vars.darkBorder};
  background-color: ${vars.secondaryBgColor};

  overflow: hidden;
  overflow-y: auto;
`;

export const CloseButton = styled(Link)`
  position: absolute;
  display: flex;
  top: 15px;
  right: 15px;
  padding: 5px;

  color: ${vars.primaryWhiteColor};
  background-color: ${vars.secondaryBgColor};

  text-decoration: none;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 4;
  gap: 14px;
  padding: 14px;
  background-color: ${vars.secondaryBgColor};
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

export const LinksWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const Text = styled.p``;
