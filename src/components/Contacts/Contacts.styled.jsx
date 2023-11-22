import styled from '@emotion/styled';

export const Border = styled.div`
  width: 100%;

  border-top: 1px solid #1e2d3d;
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

  color: #607b96;
  text-decoration: none;

  transition: color 200ms linear;

  &:hover,
  &:focus {
    color: #fff;
  }
`;
