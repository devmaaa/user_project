import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { User } from "../../services/userService";
import ErrorBoundary from "../../hoc/ErrorBoundary";

interface UserCardProps {
  user: User;
}

const Card = styled.div`
  display: flex;
  width: min(180px, 100%);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
    flex-direction: row;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: row;
    flex: 1;
    justify-content: space-around;
  }
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.backgroundHover};
    color: ${({ theme }) => theme.colors.button.textHover};
  }
`;

const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin: 10px 0;
`;

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate();

  const viewDetails = () => {
    navigate(`/user/${user.id}/${user.login}`);
  };

  return (
    <ErrorBoundary>
      <Card>
        <UserInfo>
          <UserAvatar src={user.avatar_url} alt={`${user.login}'s avatar`} />
          <UserName>{user.login}</UserName>
        </UserInfo>
        <ActionButton onClick={viewDetails}>View Details</ActionButton>
      </Card>
    </ErrorBoundary>
  );
};
