import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import InfoText from 'components/InfoText/InfoText';

const text =
  '/** \n GoIT Course - 2022-2023 \n---------------------\n FullStack JavaScript Developer \n///////////////////\n\n Sumy National Agrarian University - 2019-2021 \n---------------------\n Bachelor of Civil Engineering \n///////////////////\n\n Pryluky Hydromelioration College - 2015-2019 \n--------------------\n Associate of Construction, maintenance\n and repair of water reclamation facilities \n////////////////////\n*/';

const Education = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/about/education',
      title: 'Education',
    });
  });

  return (
    <>
      <h1 className="visually-hidden">My education</h1>
      <InfoText text={text} />
    </>
  );
};

export default Education;
