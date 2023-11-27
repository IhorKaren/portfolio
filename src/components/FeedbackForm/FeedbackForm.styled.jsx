import styled from '@emotion/styled/macro';
import { borderColor, backlight } from 'components/App.styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 40px 15px 320px 15px;
  gap: 14px;

  overflow-y: auto;

  @media screen and (min-width: 768px) {
    padding: 140px 15px 180px 15px;
    gap: 24px;
    border-top: none;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 140px;
  max-width: 372px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  & > label::after {
    ${backlight(
      '0',
      '-40px',
      '120%',
      '15%',
      '0.8',
      '1vw',
      '#0fffc1',
      '#5565E8',
      '10s'
    )}
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: max-content;

  transition: color 200ms linear;

  ${InputWrap}:focus-within & {
    color: #fff;
  }
`;

export const StyledInput = styled.input`
  z-index: 1;
  padding: 10px 15px;

  color: #465e77;
  background-color: #011221;

  border-radius: 8px;
  border: 1px solid #1e2d3d;
  outline: none;

  font-family: 'FiraCode';
  font-size: 16px;
  font-style: normal;
  font-weight: 450;

  transition: border-color 200ms linear;

  &:hover {
    border-color: #43d9ad;
  }

  &:focus {
    border-color: #5565e8;
  }
`;

export const StyledTextArea = styled.textarea`
  z-index: 1;
  height: 125px;
  padding: 10px 15px;

  color: #465e77;
  background-color: #011221;

  border-radius: 8px;
  border: 1px solid #1e2d3d;

  outline: none;
  resize: none;

  font-family: 'FiraCode';
  font-size: 16px;
  font-style: normal;
  font-weight: 450;

  ::-webkit-scrollbar {
    width: 8px;

    background-color: #011627;
    border: 1px solid #1e2d3d;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #607b96;
  }

  transition: border-color 200ms linear;

  &:hover {
    border-color: #43d9ad;
  }

  &:focus {
    border-color: #5565e8;
  }

  @media screen and (min-width: 768px) {
    height: 145px;
  }
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;

  color: #607b96;

  background-color: transparent;

  border: 1px solid transparent;
  border-radius: 8px;

  font-family: 'FiraCode';

  cursor: pointer;

  transition: background-color 200ms linear, color 200ms linear;
  animation: ${borderColor} 10s ease infinite;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #1c2b3a;
    border-color: #43d9ad;
  }
`;

export const Error = styled.div`
  width: 100%;
  max-width: 372px;

  text-align: start;
  font-size: 12px;
  color: #fea55f;
`;
