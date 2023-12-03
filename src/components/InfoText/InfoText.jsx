import addNumberAndSymbolToEachLine from 'services/addSymbolToEachLine';

import { TextList } from './InfoText.styled';

const InfoText = ({ text }) => {
  const changedText = addNumberAndSymbolToEachLine(text);

  return (
    <TextList>
      {changedText.map((el, index) => {
        return <li key={index}>{el}</li>;
      })}
    </TextList>
  );
};

export default InfoText;
