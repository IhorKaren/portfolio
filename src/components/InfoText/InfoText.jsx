import { TextList, PageWrap } from './InfoText.styled';
import addNumberAndSymbolToEachLine from 'services/addSymbolToEachLine';

const InfoText = ({ text }) => {
  const changedText = addNumberAndSymbolToEachLine(text);

  return (
    <>
      <PageWrap>
        <TextList>
          {changedText.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </TextList>
      </PageWrap>
    </>
  );
};

export default InfoText;
