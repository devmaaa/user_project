import styled from 'styled-components';
import { Button } from '../../components/atoms/Button';
export const DetailsHeader = styled.div`
   display: flex;
   margin:10px 0;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding:20px;
`;

export const DetailItem = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
export const TinyText = styled.p`
  margin: 0 0 10px 0;
  font-weight: 500;
  font-size: 12px;
`;
export const BackButton = styled(Button)`
  margin-top: 20px;
`;
export const AnchorTag = styled.a`
  color:${({ theme }) => theme.colors.text};
  text-decoration: none;
`;
export const ErrorMessage = styled.div`
  color: red;
`;
