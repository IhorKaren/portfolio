import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import {
  StyledForm,
  InputWrap,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  AnimatedErrorBox,
  Error,
} from './FeedbackForm.styled';
import { Button } from 'components/App.styled';


const schema = Yup.object().shape({
  name: Yup.string().required('name is required!').min(2).trim(),
  email: Yup.string().required('email is required!').email().trim(),
  text: Yup.string().required('message is required!').min(10).trim(),
});

const FeedbackForm = ({
  formSubmit,
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
    formSubmit(data);
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
              {...register('text')}
              onChange={onMassegeChange}
            />
          </InputWrap>
          {errors.text && <Error>{errors.text?.message}</Error>}
        </AnimatedErrorBox>
        <Button type="submit">submit-message</Button>
      </StyledForm>
    </>
  );
};

export default FeedbackForm;
