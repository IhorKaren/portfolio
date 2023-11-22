import {
  Decorate,
  DecorateList,
  DecorateItem,
  DecorateNumber,
  DecorateMessage,
} from './FormDecoration.styled';
import { Violet, Orange, Gray } from 'components/App.styled';

const FormDecoration = ({ name, email, message }) => {
  const date = new Date();

  return (
    <Decorate>
      <DecorateList>
        <DecorateItem>
          <DecorateNumber>1</DecorateNumber>
          <pre>
            {' '}
            <Violet>const</Violet> button <Violet>=</Violet> document
            <Gray>.</Gray>querySelector<Gray>(</Gray>
            <Orange>'#sendBtn'</Orange>
            <Gray>);</Gray>
          </pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>2</DecorateNumber>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>3</DecorateNumber>
          <pre>
            <Violet> const</Violet> message <Violet>=</Violet>{' '}
            <Gray>&#123;</Gray>
          </pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>4</DecorateNumber>
          <pre>  name: </pre>
          <DecorateMessage>"{name}",</DecorateMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>5</DecorateNumber>
          <pre>  email: </pre>
          <DecorateMessage>"{email}",</DecorateMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>6</DecorateNumber>
          <pre>  message: </pre>
          <DecorateMessage>{'"' + message + '",'}</DecorateMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>7</DecorateNumber>
          <pre>  date: </pre>
          <DecorateMessage>"{date.toDateString()}",</DecorateMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>8</DecorateNumber>
          <pre>
            {' '}
            <Gray>&#125;</Gray>
          </pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>9</DecorateNumber>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>10</DecorateNumber>
          <pre>
            button.addEventListener<Gray>&#40;</Gray>
            <Orange>'click'</Orange>
            <Gray>, () </Gray>
            <Violet>=&gt;</Violet> <Gray>&#123;</Gray>
          </pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>11</DecorateNumber>
          <pre>
            {' '}
            form.send<Gray>(</Gray>message<Gray>);</Gray>
          </pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>12</DecorateNumber>
          <pre>
            <Gray>&#125;&#41;</Gray>
          </pre>
        </DecorateItem>
      </DecorateList>
    </Decorate>
  );
};

export default FormDecoration;
