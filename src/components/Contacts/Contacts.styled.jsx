import styled from '@emotion/styled';

export const Borders = styled.div`
  width: 110%;

  border-top: 1px solid #1e2d3d;
  border-bottom: 1px solid #1e2d3d;
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
