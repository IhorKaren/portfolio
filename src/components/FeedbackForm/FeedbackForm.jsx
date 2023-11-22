import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  StyledForm,
  InputWrap,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  SubmitButton,
  Error,
} from './FeedbackForm.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('name is required!').min(2),
  email: Yup.string().required('email is required!').email(),
  message: Yup.string().required('message is required!').min(10),
});

const FeedbackForm = ({ sendFeedback,onNameChange,onEmailChange, onMassegeChange }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <StyledLabel htmlFor="name">_name:</StyledLabel>
          <StyledInput
            autoComplete="off"
            maxLength={30}
            type="text"
            id="name"
            placeholder="Name"
            {...register('name')}
            onChange={onNameChange}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </InputWrap>
        <InputWrap>
          <StyledLabel htmlFor="email">_email:</StyledLabel>
          <StyledInput
            autoComplete="off"
            maxLength={30}
            type="email"
            id="email"
            placeholder="example@mail.com"
            {...register('email')}
            onChange={onEmailChange}
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </InputWrap>
        <InputWrap>
          <StyledLabel htmlFor="message">_message:</StyledLabel>
          <StyledTextArea
            autoComplete="off"
            type="text"
            id="message"
            placeholder="Your message..."
            {...register('message')}
            onChange={onMassegeChange}
          />
          {errors.message && <Error>{errors.message?.message}</Error>}
        </InputWrap>
        <SubmitButton type="submit">submit-message</SubmitButton>
      </StyledForm>
    </>
  );
};

export default FeedbackForm;
