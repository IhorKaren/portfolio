import { useState, useEffect } from 'react';
import { getActualResume } from 'services/api';
import {
  Thumb,
  Caption,
  MainTitle,
  SubTitle,
  CommentsList,
  ListLinks,
  LinkItem,
  Link,
  Decoration,
  GreenStain,
  BlueStain,
} from './Greeting.styled';
import { Blue, Green } from 'components/App.styled';
import FloatingDust from 'components/FloatingDust/FloatingDust';

const Greeting = () => {
  const [resume, setRecume] = useState({
    id: 1,
    link: '/',
  });

  useEffect(() => {
    const getCv = async () => {
      try {
        const response = await getActualResume();

        setRecume(response[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getCv();
  }, []);

  return (
    <>
      <Thumb>
        <div>
          <Caption>Hello everyone. I am</Caption>
          <MainTitle>Ihor Karen</MainTitle>
          <SubTitle>{'>'} Junior Full Stack developer</SubTitle>
        </div>
        <div>
          <CommentsList>
            <li>
              <p>{'//'} this portfolio was developed with React and Node.js</p>
            </li>
            <li>
              <p>{'//'} you can also see it on my Github page:</p>
            </li>
          </CommentsList>
          <ListLinks>
            <LinkItem>
              <span>
                <Blue>const</Blue> <Green>githubLink</Green> ={' '}
              </span>
              <Link
                href="https://github.com/IhorKaren"
                target="_blank"
                rel="noreferrer"
              >
                “https://github.com/IhorKaren”
              </Link>
            </LinkItem>
            <LinkItem>
              <span>
                <Blue>const</Blue> <Green>resumeLink</Green> ={' '}
              </span>
              <Link href={resume.link} target="_blank" rel="noreferrer">
                “https://drive.google.com/file”
              </Link>
            </LinkItem>
          </ListLinks>
        </div>
      </Thumb>
      <Decoration>
        <GreenStain />
        <BlueStain />
      </Decoration>
      <FloatingDust />
    </>
  );
};

export default Greeting;
