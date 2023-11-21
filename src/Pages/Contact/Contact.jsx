import Aside from 'components/Aside/Aside';
import Contacts from 'components/Contacts/Contacts';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import { PageContainer } from './Contact.styled';

const Contact = () => {
  return (
    <>
      <Aside text="contacts">
        <Contacts />
      </Aside>
      <PageContainer>
        <FeedbackForm />
      </PageContainer>
    </>
  );
};

export default Contact;
