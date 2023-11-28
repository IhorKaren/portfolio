import styled from 'styled-components';
import { vars } from 'components/App.styled';

export const Border = styled.div`
  width: 100%;

  border-top: ${vars.darkBorder};
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 14px;
`;

export const ContanctLink = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  text-decoration: none;

  transition: color 200ms linear;

  &:hover,
  &:focus {
    color: ${vars.darkBorder};
  }
`;
