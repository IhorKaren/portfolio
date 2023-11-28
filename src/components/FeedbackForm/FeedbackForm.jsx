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
  AnimatedErrorBox,
  Error,
} from './FeedbackForm.styled';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const schema = Yup.object().shape({
  name: Yup.string().required('name is required!').min(2),
  email: Yup.string().required('email is required!').email(),
  message: Yup.string().required('message is required!').min(10),
});

const FeedbackForm = ({
  sendFeedback,
  onNameChange,
  onEmailChange,
  onMassegeChange,
}) => {
  const [parent] = useAutoAnimate();

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
        <AnimatedErrorBox ref={parent}>
          <InputWrap role="group">
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
          </InputWrap>
          {errors.name && <Error>{errors.name?.message}</Error>}
        </AnimatedErrorBox>
        <AnimatedErrorBox ref={parent}>
          <InputWrap role="group">
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
          </InputWrap>
          {errors.email && <Error>{errors.email?.message}</Error>}
        </AnimatedErrorBox>
        <AnimatedErrorBox ref={parent}>
          <InputWrap role="group">
            <StyledLabel htmlFor="message">_message:</StyledLabel>
            <StyledTextArea
              autoComplete="off"
              type="text"
              id="message"
              placeholder="Your message..."
              {...register('message')}
              onChange={onMassegeChange}
            />
          </InputWrap>
          {errors.message && <Error>{errors.message?.message}</Error>}
        </AnimatedErrorBox>
        <SubmitButton type="submit">submit-message</SubmitButton>
      </StyledForm>
    </>
  );
};

export default FeedbackForm;
