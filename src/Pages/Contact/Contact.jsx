import ReactGA from 'react-ga4';
import { useState } from 'react';
import { sendMessage } from 'services/api';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Aside from 'components/Aside/Aside';
import Contacts from 'components/Contacts/Contacts';
import { PageContainer } from 'components/Container/Container.styled';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import SuccessfullSubmit from 'components/SuccessfullSubmit/SuccessfullSubmit';
import FormDecoration from 'components/FormDecoration/FormDecoration';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formIsShow, setFormIsShow] = useState(true);
  const [parent] = useAutoAnimate();

  const gaEventTracker = status => {
    ReactGA.event({
      category: 'FormSubmited',
      action: 'submit',
      label: status,
    });
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = async data => {
    try {
      const result = await sendMessage(data);

      if (result.status === 201) {
        setFormIsShow(false);
        gaEventTracker('Success');
      }
    } catch (error) {
      gaEventTracker(`${error}`);
    } finally {
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
      <h1 className="visually-hidden">Contact me</h1>
      <Aside text="communication">
        <Contacts />
      </Aside>
      <PageContainer ref={parent}>
        {formIsShow ? (
          <FeedbackForm
            formSubmit={handleFormSubmit}
            onNameChange={handleNameChange}
            onEmailChange={handleEmailChange}
            onMassegeChange={handleMessageChange}
          />
        ) : (
          <SuccessfullSubmit onClick={() => setFormIsShow(true)} />
        )}
        <FormDecoration name={name} email={email} message={message} />
      </PageContainer>
    </>
  );
};

export default Contact;
