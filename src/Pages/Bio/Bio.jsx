import InfoText from 'components/InfoText/InfoText';

const text =
  "/** \n I am a Junior Full Stack developer. I recently completed\n a course from GoIT, specializing in HTML, CSS, Material UI,\n JavaScript, TypeScript, React, Next.js, Node.js MySQL and \n MongoDB. \n\n I have a degree in civil engineering, but I've always\n dreamed of becoming a developer. I am motivated and\n confident that I can succeed in this field. I know how\n to work in a team and interact effectively with\n other developers. \n\n This portfolio presents my projects that demonstrate my\n skills and experience. \n\n I believe that learning is the key to success in any field\n of activity. I am always ready to learn new things and\n improve my skills. \n\n I am currently actively looking for a job as a Junior\n Full Stack or Front-end developer. I am confident that\n I can contribute to your company and become a valuable\n member of your team. \n */";

const Bio = () => {
  return (
    <>
      <h1 className="visually-hidden">About me</h1>
      <InfoText text={text} />
    </>
  );
};

export default Bio;
