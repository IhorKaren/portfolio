import Aside from 'components/Aside/Aside';
import Contacts from 'components/Contacts/Contacts';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import FormDecoration from 'components/FormDecoration/FormDecoration';
import { PageContainer } from './Contact.styled';
import { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Aside text="contacts">
        <Contacts />
      </Aside>
      <PageContainer>
        <FeedbackForm onMassegeChange={handleMessageChange} />
        <FormDecoration message={message} />
      </PageContainer>
    </>
  );
};

export default Contact;
