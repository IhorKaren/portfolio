import styled from 'styled-components';
import { vars, borderColor, animateShadow } from 'components/App.styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 60px 15px 320px 15px;
  gap: 48px;

  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    padding: 150px 15px 160px 15px;
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
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: -30px;
  display: inline-block;
  width: max-content;

  transition: color ${vars.timingFunction};

  &:hover {
    color: ${vars.primaryWhiteColor};

    + input {
      border-color: ${vars.primaryWhiteColor};
    }
  }

  ${InputWrap}:focus-within &, ${InputWrap}:hover & {
    color: ${vars.primaryWhiteColor};
  }

  cursor: pointer;
`;

export const StyledInput = styled.input`
  padding: 10px 15px;
  border-radius: 8px;
  border: ${vars.darkBorder};
  outline: none;

  color: ${vars.secondaryTextcolor};
  background-color: ${vars.secondaryBgColor};

  font-family: ${vars.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 450;

  transition: border-color ${vars.timingFunction};
  animation: ${animateShadow} 10s ease infinite;

  ${InputWrap}:focus-within &, ${InputWrap}:hover & {
    border-color: ${vars.primaryWhiteColor};
  }
`;

export const StyledTextArea = styled.textarea`
  height: 125px;
  padding: 10px 15px;
  outline: none;
  resize: none;

  color: ${vars.secondaryTextcolor};
  background-color: ${vars.secondaryBgColor};

  border-radius: 8px;
  border: ${vars.darkBorder};

  font-family: ${vars.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 450;

  transition: border-color ${vars.timingFunction};
  animation: ${animateShadow} ${vars.keyframeFunction};

  ::-webkit-scrollbar {
    border: ${vars.darkBorder};
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
  }

  ${InputWrap}:focus-within &, ${InputWrap}:hover & {
    border-color: ${vars.primaryWhiteColor};
  }

  @media screen and (min-width: 768px) {
    height: 145px;
  }
`;

export const AnimatedErrorBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  width: 100%;
`;

export const Error = styled.div`
  width: 100%;
  max-width: 372px;

  text-align: start;
  font-size: 12px;
  color: ${vars.accentOrange};
`;
