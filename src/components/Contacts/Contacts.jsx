import { Borders, ContactsList, ContanctLink } from './Contacts.styled';
import { BsFillEnvelopeAtFill, BsTelephoneFill } from 'react-icons/bs';
import MenuTitle from 'components/MenuTitle/MenuTitle';

const Contacts = ({ isNeedBorders }) => {
  return (
    <div>
      {isNeedBorders ? (
        <Borders>
          <MenuTitle title="contacts" />
        </Borders>
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
