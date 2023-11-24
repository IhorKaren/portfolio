import {
  Decorate,
  DecorateList,
  DecorateItem,
  DecorateText,
  DecorateNumber,
  DecorateMessage,
  DecorateAreaMessage,
} from './FormDecoration.styled';
import { Violet, Orange, Gray } from 'components/App.styled';

const FormDecoration = ({ name, email, message }) => {
  const date = new Date();

  return (
    <Decorate>
      <DecorateList>
        <DecorateItem>
          <DecorateNumber>1</DecorateNumber>
          <DecorateText>
            {' '}
            <Violet>const</Violet> button <Violet>=</Violet> document
            <Gray>.</Gray>querySelector<Gray>(</Gray>
            <Orange>'#sendBtn'</Orange>
            <Gray>);</Gray>
          </DecorateText>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>2</DecorateNumber>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>3</DecorateNumber>
          <DecorateText>
            <Violet> const</Violet> message <Violet>=</Violet>{' '}
            <Gray>&#123;</Gray>
          </DecorateText>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>4</DecorateNumber>
          <DecorateText> name: </DecorateText>
          <DecorateMessage>"{name}",</DecorateMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>5</DecorateNumber>
          <DecorateText> email: </DecorateText>
          <DecorateMessage>"{email}",</DecorateMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>6</DecorateNumber>
          <DecorateText> message: </DecorateText>
          <DecorateAreaMessage>{'"' + message + '",'}</DecorateAreaMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>7</DecorateNumber>
          <DecorateText> date: </DecorateText>
          <DecorateMessage>"{date.toDateString()}",</DecorateMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>8</DecorateNumber>
          <DecorateText>
            {' '}
            <Gray>&#125;</Gray>
          </DecorateText>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>9</DecorateNumber>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>10</DecorateNumber>
          <DecorateText>
            button.addEventListener<Gray>&#40;</Gray>
            <Orange>'click'</Orange>
            <Gray>, () </Gray>
            <Violet>=&gt; </Violet> <Gray>&#123;</Gray>
          </DecorateText>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>11</DecorateNumber>
          <DecorateText>
            {' '}
            form.send<Gray>(</Gray>message<Gray>);</Gray>
          </DecorateText>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>12</DecorateNumber>
          <DecorateText>
            <Gray>&#125;&#41;</Gray>
          </DecorateText>
        </DecorateItem>
      </DecorateList>
    </Decorate>
  );
};

export default FormDecoration;
