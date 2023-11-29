import styled from 'styled-components';
import { vars } from 'components/App.styled';

export const SuccessWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 120px 15px 320px 15px;
  gap: 10px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 260px 15px 160px 15px;
    border-top: none;
  }
`;

export const Caption = styled.h2`
  color: ${vars.primaryWhiteColor};

  font-weight: 400;
`;

export const Message = styled.p`
  max-width: 420px;

  margin-bottom: 35px;
`;
