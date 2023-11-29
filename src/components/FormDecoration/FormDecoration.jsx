import {
  Decorate,
  DecorateList,
  DecorateItem,
  Pre,
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
            <Pre>
              <Violet>const</Violet> button <Violet>=</Violet> document
              <Gray>.</Gray>querySelector<Gray>(</Gray>
              <Orange>'#sendBtn'</Orange>
              <Gray>);</Gray>
            </Pre>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>2</DecorateNumber>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>3</DecorateNumber>
            <Pre>
              <Violet> const</Violet> message <Violet>= </Violet>
              <Gray>&#123;</Gray>
            </Pre>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>4</DecorateNumber>
            <Pre>  name: </Pre>
            <DecorateMessage>"{name}",</DecorateMessage>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>5</DecorateNumber>
            <Pre>  email: </Pre>
            <DecorateMessage>"{email}",</DecorateMessage>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>6</DecorateNumber>
            <Pre>  message: </Pre>
            <DecorateAreaMessage>{'"' + message + '",'}</DecorateAreaMessage>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>7</DecorateNumber>
            <Pre>  date: </Pre>
            <DecorateMessage>"{date.toDateString()}",</DecorateMessage>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>8</DecorateNumber>
            <Pre>
              <Gray>&#125;</Gray>
            </Pre>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>9</DecorateNumber>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>10</DecorateNumber>
            <Pre>
              button.addEventListener<Gray>&#40;</Gray>
              <Orange>'click'</Orange>
              <Gray>, () </Gray>
              <Violet>=&gt; </Violet> <Gray>&#123;</Gray>
            </Pre>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>11</DecorateNumber>
            <Pre>
              form.send<Gray>(</Gray>message<Gray>);</Gray>
            </Pre>
          </DecorateItem>
          <DecorateItem>
            <DecorateNumber>12</DecorateNumber>
            <Pre>
              <Gray>&#125;&#41;</Gray>
            </Pre>
          </DecorateItem>
        </DecorateList>
    </Decorate>
  );
};

export default FormDecoration;
