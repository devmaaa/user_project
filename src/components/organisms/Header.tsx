import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ThemeToggle} from '../atoms/ThemeToggleSwitch';
import { useTheme } from "../../themes/ThemeSwitcher";

const HeaderContainer = styled.header`
  margin-top:40px;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 5px 50px;
  backdrop-filter: blur(1rem);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeSwitchButton = styled.button`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.backgroundHover};
  }
`;

export const Header: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <NavLinks>
        <NavLinkStyled
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLinkStyled>
        <NavLinkStyled
          to="/users"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          User List
        </NavLinkStyled>
      </NavLinks>
      <ThemeToggle />
      {/* <ThemeSwitchButton onClick={toggleTheme}>Toggle Theme</ThemeSwitchButton> */}
    </HeaderContainer>
  );
};
