import InfoText from 'components/InfoText/InfoText';

const text =
  "/** \n My name is Ihor, and I love many things, but all this is\n banality. I like to play computer games, travel, watch movies\n and TV shows, I'm fond of cars and I have a four-legged\n friend - a Labrador dog named Baloo.\n\nComputer games\n\n Computer games are one of my main interests. I like to play\n a variety of genres, from adventure to strategy. Games for\n me are not just entertainment, but also a way to travel to\n other worlds, learn new things and develop my skills. I like\n to feel like a part of a big story that takes place on the\n screen. I like to solve quests of any difficulty level, the\n more difficult the more interesting.\n\n Traveling\n\n I have been to Germany, Belgium, Poland and the Netherlands\n and was super satisfied and very interested in traveling in\n the future, traveling always gives new friends, impressions\n and supports perhaps my main dream in life - to live in the\n UK, I also really dream of getting to Australia.\n\n Movies and TV shows\n\n I like to watch movies and TV series because they allow me\n to immerse myself in another world. I love science fiction,\n it allows me to fantasize about what it would be like if\n everything was different. I like fantasy because it tells\n about incredible adventures and heroes. Detectives, because\n they allow me to feel the atmosphere of investigation. And I\n like documentaries because they allow me to learn something\n new about the world I live in.\n\n Cars\n\n Cars are a symbol of freedom and adventure. I dream of having\n my own car in the future and traveling around the world. I am\n sure it will be an unforgettable and exciting experience.\n I love everything about cars: their design, technical\n characteristics, history. I often read articles about cars,\n watch videos and documentaries.\n\n Baloo\n\n Balu is the best friend I could ever wish for. He is always by\n my side, always ready to support me. Balu brings me a lot of\n joy and helps me relax after a hard day. I am grateful to him\n for having him.\n\n Although my interests are simple, they make my life interesting\n and diverse. They help me develop as a person and build an\n interesting life.\n */";

const Interests = () => {
  return (
    <>
      <h1 className="visually-hidden">My interests</h1>
      <InfoText text={text} />
    </>
  );
};

export default Interests;
