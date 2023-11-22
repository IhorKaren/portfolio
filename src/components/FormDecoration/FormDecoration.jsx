import {
  DecorateList,
  DecorateItem,
  DecorateNumber,
  DecorateMessage,
} from './FormDecoration.styled';

const FormDecoration = ({ name, email, message }) => {
  return (
    <>
      <DecorateList>
        <DecorateItem>
          <DecorateNumber>1</DecorateNumber>
          <pre> const button = document.querySelector('#sendBtn');</pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>2</DecorateNumber>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>3</DecorateNumber>
          <pre> const message = &#123;</pre>
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
          <pre>  message: </pre>{' '}
          <DecorateMessage>{'"' + message + '",'}</DecorateMessage>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>7</DecorateNumber>
          <pre>  date: "Thu 21 Apr"</pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>8</DecorateNumber>
          <pre> &#125;</pre>
        </DecorateItem>
        <DecorateItem>9</DecorateItem>
        <DecorateItem>
          <DecorateNumber>10</DecorateNumber>
          <pre>button.addEventListener&#40;'click', () =&gt; &#123;</pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>11</DecorateNumber>
          <pre> form.send(message);</pre>
        </DecorateItem>
        <DecorateItem>
          <DecorateNumber>12</DecorateNumber>
          <pre>&#125;&#41;</pre>
        </DecorateItem>
      </DecorateList>
    </>
  );
};

export default FormDecoration;
