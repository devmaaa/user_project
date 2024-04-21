import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/organisms/Header";

const MainLayoutContainer = styled.div`
  width:100%;
  margin:0 auto;
  max-width:1024px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const MainLayout: React.FC = () => {
  return (
    <MainLayoutContainer>
      <Header />
      <ContentArea>
        <Outlet />
      </ContentArea>
    </MainLayoutContainer>
  );
};
