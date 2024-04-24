import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/organisms/Header/Header';
import { MainLayoutContainer, ContentArea } from './MainLayout.style';

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
