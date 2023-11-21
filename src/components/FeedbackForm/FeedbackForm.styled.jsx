import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 120px 15px;
  gap: 24px;
  width: 100vw;
  min-width: 140px;
  max-width: 372px;
`;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: max-content;
`;

export const StyledInput = styled.input`
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
  height: 145px;
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
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;

  color: #ffffff;
  background-color: #1c2b3a;

  border: 1px solid transparent;
  border-radius: 8px;

  font-family: 'FiraCode';

  cursor: pointer;

  transition: background-color 200ms linear, border-color 200ms linear;

  &:hover,
  &:focus {
    background-color: transparent;
    border-color: #43d9ad;
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 12px;
  color: #fea55f;
  animation: ${appear} 500ms ease-in-out;
`;
