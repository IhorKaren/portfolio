import { SuccessWrap, Caption, Message } from './SuccessfullSubmit.styled';
import { Button } from 'components/App.styled';

const SuccessfullSubmit = ({ onClick }) => {
  return (
    <SuccessWrap>
      <Caption>Thank you! 😐</Caption>
      <Message>
        Your message has been successfully delivered. You will recieve answer
        really soon!
      </Message>
      <Button type="button" onClick={onClick}>
        send-new-message
      </Button>
    </SuccessWrap>
  );
};

export default SuccessfullSubmit;
