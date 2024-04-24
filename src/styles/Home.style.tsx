import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`;

export const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin-top: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  margin-right: 10px;
  border: 2px solid ${({ theme }) => theme.colors.button.border};
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  border: 1px solid ${({ theme }) => theme.colors.button.border};
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color:${({ theme }) => theme.colors.button.backgroundHover};
    transition: background-color 0.3s ease;
  }
`;