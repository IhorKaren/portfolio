import { useState } from 'react';
import {
  PageHeader,
  Name,
  Nav,
  NavList,
  NavItem,
  Link,
  MenuButton,
  Backdrop,
} from './Header.styled';
import { BsXLg, BsTextRight } from 'react-icons/bs';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <PageHeader>
      <Name>ihor-karen</Name>
      <Backdrop
        className={menuIsOpen ? '' : 'hidden'}
        onClick={() => setMenuIsOpen(false)}
      ></Backdrop>
      <Nav className={menuIsOpen ? 'open' : ''}>
        <NavList>
          <NavItem>
            <Link to="greeting" onClick={() => setMenuIsOpen(false)}>
              _hello
            </Link>
          </NavItem>
          <NavItem>
            <Link to="about" onClick={() => setMenuIsOpen(false)}>
              _about-me
            </Link>
          </NavItem>
          <NavItem>
            <Link to="projects" onClick={() => setMenuIsOpen(false)}>
              _projects
            </Link>
          </NavItem>
          <NavItem>
            <Link to="contact" onClick={() => setMenuIsOpen(false)}>
              _contact-me
            </Link>
          </NavItem>
        </NavList>
      </Nav>
      <MenuButton onClick={() => setMenuIsOpen(!menuIsOpen)} aria-label='mobile menu toggle'>
        {menuIsOpen ? <BsXLg size={24} /> : <BsTextRight size={28} />}
      </MenuButton>
    </PageHeader>
  );
};

export default Header;
