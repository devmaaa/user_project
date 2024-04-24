import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(10px);
  }
`;

export const MainLayoutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentArea = styled.main`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  &.fade-enter {
    animation: ${fadeIn} 0.5s ease;
  }

  &.fade-exit {
    animation: ${fadeOut} 0.5s ease;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 10px;
  }
`;
