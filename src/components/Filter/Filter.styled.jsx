import styled from 'styled-components';
import { vars } from 'components/App.styled';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  padding: 10px 18px;
  max-width: 500px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 14px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;

  transition: color ${vars.timingFunction};

  & > svg {
    transition: color ${vars.timingFunction};
    color: ${vars.accentGray};
  }

  &:hover,
  &:focus {
    color: ${vars.primaryWhiteColor};
  }
`;

export const Input = styled.input`
  display: block;
  appearance: none;

  &:checked + ${Label} {
    color: ${vars.primaryWhiteColor};

    > svg {
      color: ${vars.primaryWhiteColor};
    }
  }
`;
