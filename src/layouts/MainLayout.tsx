import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Header } from '../components/organisms/Header/Header';

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

const MainLayoutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentArea = styled.main`
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

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const currentPath = location.pathname;
    const animationName = currentPath === '/' ? 'fade-enter' : 'fade-exit';
    setAnimationClass(animationName);
  }, [location]);

  return (
    <MainLayoutContainer>
      <Header />
      <ContentArea className={animationClass}>
        <Outlet />
      </ContentArea>
    </MainLayoutContainer>
  );
};
