import { Border, ContactsList, ContanctLink } from './Contacts.styled';
import { BsFillEnvelopeAtFill, BsTelephoneFill } from 'react-icons/bs';
import MenuTitle from 'components/MenuTitle/MenuTitle';

const Contacts = ({ isNeedBorder }) => {
  return (
    <div>
      {isNeedBorder ? (
        <Border>
          <MenuTitle title="contacts" />
        </Border>
      ) : (
        <MenuTitle title="contacts" />
      )}
      <ContactsList>
        <li>
          <ContanctLink href="mailto:karenihor@gmail.com">
            <BsFillEnvelopeAtFill size={16} />
            karenihor@gmail.com
          </ContanctLink>
        </li>
        <li>
          <ContanctLink href="tel:+380956002510">
            <BsTelephoneFill size={16} />
            +380956002510
          </ContanctLink>
        </li>
      </ContactsList>
    </div>
  );
};

export default Contacts;
