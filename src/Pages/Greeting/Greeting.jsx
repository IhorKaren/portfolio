import {
  Thumb,
  Caption,
  MainTitle,
  SubTitle,
  CommentsList,
  LinkThumb,
  Link,
  AccentColor,
  Decoration,
  GreenStain,
  BlueStain,
} from './Greeting.styled';

const Greeting = () => {
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
          <LinkThumb>
            <span>
              <AccentColor>const</AccentColor>{' '}
              <AccentColor>githubLink</AccentColor> <AccentColor>=</AccentColor>{' '}
            </span>
            <Link
              href="https://github.com/IhorKaren"
              target="_blank"
              rel="noreferrer"
            >
              “https://github.com/IhorKaren”
            </Link>
          </LinkThumb>
        </div>
      </Thumb>
      <Decoration>
        <GreenStain />
        <BlueStain />
      </Decoration>
    </>
  );
};

export default Greeting;
