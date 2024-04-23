import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {RoutePaths} from '../../routes/AppRoutes'
import { ThemeToggle } from "../atoms/ThemeToggleSwitch";


const HeaderContainer = styled.header`
  margin-top: 40px;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
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

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavLinks>
        <NavLinkStyled
          to={RoutePaths.Home}
          end
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLinkStyled>
        <NavLinkStyled
          to={RoutePaths.UserList}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          User List
        </NavLinkStyled>
      </NavLinks>
      <ThemeToggle />
    </HeaderContainer>
  );
};
