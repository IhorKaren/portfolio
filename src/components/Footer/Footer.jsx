import { useLocation } from 'react-router-dom';
import { BsLinkedin, BsTelegram, BsGithub } from 'react-icons/bs';

import {
  PageFooter,
  Hint,
  SocialsList,
  SocialListItem,
  SocialLink,
} from './Footer.styled';

const Footer = () => {
  const location = useLocation();
  const checkLocation = location.pathname === '/greeting';

  return (
    <PageFooter
      style={{ backgroundColor: checkLocation ? 'transparent' : '#011627' }}
    >
      <Hint>find me in:</Hint>
      <SocialsList>
        <SocialListItem>
          <SocialLink
            href="https://www.linkedin.com/in/ihor-karen/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedIn link"
          >
            <BsLinkedin size={24} />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink
            href="https://t.me/IhorKaren"
            target="_blank"
            rel="noreferrer"
            aria-label="telegram link"
          >
            <BsTelegram size={24} />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink
            href="https://github.com/IhorKaren"
            target="_blank"
            rel="noreferrer"
          >
            @IhorKaren <BsGithub size={24} />
          </SocialLink>
        </SocialListItem>
      </SocialsList>
    </PageFooter>
  );
};

export default Footer;
