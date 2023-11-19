import {
  PageFooter,
  Hint,
  SocialsList,
  SocialListItem,
  SocialLink,
} from './Footer.styled';

import { BsLinkedin, BsDiscord, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <PageFooter>
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
            href="https://discordapp.com/users/ihorkaren"
            target="_blank"
            rel="noreferrer"
            aria-label="discord link"
          >
            <BsDiscord size={24} />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink
            href="https://github.com/IhorKaren"
            target="_blank"
            rel="noreferrer"
            aria-label="github link"
          >
            @IhorKaren <BsGithub size={24} />
          </SocialLink>
        </SocialListItem>
      </SocialsList>
    </PageFooter>
  );
};

export default Footer;
