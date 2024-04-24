import { RoutePaths } from "../../routes/AppRoutes";
import { ThemeToggle } from "../atoms/ThemeToggleSwitch";
import {
  HeaderContainer,
  NavLinks,
  NavLinkStyled,
} from "../../styles/Header.style";

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
