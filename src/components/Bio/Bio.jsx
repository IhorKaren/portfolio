import { TextList, PageWrap } from './Bio.styled';
import addNumberAndSymbolToEachLine from 'services/addSymbolToEachLine';

const text =
  "/** \n I am a Junior Full Stack JavaScript developer. I recently completed a course from GoIT,\n specializing in HTML, CSS, Material UI, JavaScript, TypeScript, React, Next.js,\n Node.js MySQL and MongoDB. \n\n I have a degree in civil engineering, but I've always dreamed of becoming a developer. \n I am motivated and confident that I can succeed in this field. I know how to work in \n a team and interact effectively with other developers. \n\n This portfolio presents my projects that demonstrate my skills and experience. \n\n I am always open to new opportunities and ready to cooperate. I am confident that I will \n be able to contribute to the development of your company. \n\n Additionally, I would like to emphasize my motivation for learning and development. I am \n constantly learning new technologies and techniques to keep up with the latest trends in \n development. \n\n I believe that learning is the key to success in any field of activity. I am always ready \n to learn new things and improve my skills. \n\n I am currently actively looking for a job as a Junior Full Stack or Front-end developer. I am \n confident that I can contribute to your company and become a valuable member of your team. \n */";

const Bio = () => {
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

export default Bio;
