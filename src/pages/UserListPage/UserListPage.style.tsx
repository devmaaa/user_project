import styled from 'styled-components';

export const UserListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ActionArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const UserList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 0;
    height: 70vh;
    overflow-x: auto;
  }
`;

export const ListNavArea = styled.div`
  margin: 20px 0 0 0;
`;
