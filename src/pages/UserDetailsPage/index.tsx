import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserDetails, UserDetails } from '../../services/userService';
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import {
  DetailsContainer,
  DetailItem,
  TinyText,
  BackButton,
  ErrorMessage,
} from './UserDetails.style';
import Spinner from '../../components/atoms/Spinner/';

enum Navigate {
  Back = -1,
}

const UserDetailsPage: React.FC = () => {
  const { username } = useParams<{
    username: string;
  }>();

  const [user, setUser] = useState<UserDetails | null>(null);

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (username) {
          const userDetails = await fetchUserDetails(username);
          setUser(userDetails);
          setError(null);
        }
      } catch (error) {
        console.error('Failed to fetch user details', error);
        setError('User not found');
      }
    };

    fetchDetails();
  }, [username]);

  if (error) {
    return (
      <DetailsContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <BackButton onClick={() => navigate(Navigate.Back)}>Go Back</BackButton>
      </DetailsContainer>
    );
  }

  if (!user) {
    return <Spinner />;
  }

  return (
    <ErrorBoundary>
      <DetailsContainer>
        <BackButton onClick={() => navigate(Navigate.Back)}>
          <ArrowLeft />
        </BackButton>
        <DetailItem>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s profile`}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
        </DetailItem>
        <DetailItem>
          <MapPin />
          <br />
          <TinyText>{user.location}</TinyText>
          {user.name}
          <p>{user.email}</p>
        </DetailItem>
        <DetailItem>
          <p>{user.bio}</p>
        </DetailItem>
        <DetailItem>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <ExternalLink color="#1a1a1a" />
          </a>
        </DetailItem>
      </DetailsContainer>
    </ErrorBoundary>
  );
};

export default UserDetailsPage;
