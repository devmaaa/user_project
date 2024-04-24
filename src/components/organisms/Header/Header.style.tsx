import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HeaderContainer = styled.header`
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
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
