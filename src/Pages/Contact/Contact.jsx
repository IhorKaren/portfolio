import Aside from 'components/Aside/Aside';
import Contacts from 'components/Contacts/Contacts';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import FormDecoration from 'components/FormDecoration/FormDecoration';
import { PageContainer } from './Contact.styled';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Aside text="contacts">
        <Contacts />
      </Aside>
      <PageContainer>
        <FeedbackForm
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onMassegeChange={handleMessageChange}
        />
        <FormDecoration name={name} email={email} message={message} />
      </PageContainer>
    </>
  );
};

export default Contact;
