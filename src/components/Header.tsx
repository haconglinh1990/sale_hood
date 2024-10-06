import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <Container>
      <Logo>SALEHOOD</Logo>
      <Nav>
        <NavItem as={Link} to="/" isActive={location.pathname === '/'}>
          Home
        </NavItem>
        <NavItem
          as={Link}
          to="/notes"
          isActive={location.pathname === '/notes'}
        >
          Notes
        </NavItem>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  gap: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const NavItem = styled(Link)<{ isActive: boolean }>`
  font-size: 1rem;
  color: ${(props) => (props.isActive ? '#007bff' : 'black')};
  cursor: pointer;
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};

  &:hover {
    text-decoration: underline;
  }
`;
