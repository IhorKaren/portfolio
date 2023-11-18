import { PageHeader,Name, Nav, NavList, NavItem, Link } from './Header.styled';

const Header = () => {
  return (
    <PageHeader>
      <Name>ihor-karen</Name>
      <Nav>
        <NavList>
          <NavItem>
            <Link to="greeting">_hello</Link>
          </NavItem>
          <NavItem>
            <Link to="about">_about-me</Link>
          </NavItem>
          <NavItem>
            <Link to="projects">_projects</Link>
          </NavItem>
          <NavItem>
            <Link to="contact">_contact-me</Link>
          </NavItem>
        </NavList>
      </Nav>
    </PageHeader>
  );
};

export default Header;
