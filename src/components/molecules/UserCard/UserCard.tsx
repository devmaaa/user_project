import { useNavigate } from 'react-router-dom';
import { User } from '../../../services/userService';
import ErrorBoundary from '../../../hoc/ErrorBoundary';
import { Card, UserInfo, ActionButton, UserAvatar, UserName } from './UserCard.style';

interface UserCardProps {
  user: User;
}

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
