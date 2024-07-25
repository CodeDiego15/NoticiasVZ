// src/components/Header.js
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  color: #fff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease; /* Transición suave */
  
  &.scrolled {
    background: #000; /* Color de fondo cuando se hace scroll */
    opacity: 0.9; /* Opcional: aumentar la opacidad cuando se hace scroll */
    backdrop-filter: blur(5px); /* Aplicar efecto de desenfoque */
  }
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2em;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #1e90ff;
    transform: scale(1.1);
  }
`;

const Header = ({ onCategoryChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer className={isScrolled ? 'scrolled' : ''}>
      <Logo>NoticiasVZ</Logo>
      <Nav>
        <NavLink onClick={() => onCategoryChange('sports')}>Deportes</NavLink>
        <NavLink onClick={() => onCategoryChange('Venezuela')}>Venezuela</NavLink>
        <NavLink onClick={() => onCategoryChange('World')}>Mundo</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

