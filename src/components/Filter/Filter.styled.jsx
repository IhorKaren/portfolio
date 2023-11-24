import styled from '@emotion/styled/macro';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  column-gap: 10px;
  padding: 10px 18px;
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  gap: 5px;

  transition: color 200ms linear;

  & > svg {
    transition: color 200ms linear;
    color: #607b96;
  }

  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const Input = styled.input`
  appearance: none;

  &:checked + ${Label} {
    color: #fff;

    > svg {
      color: #fff;
    }
  }
`;
