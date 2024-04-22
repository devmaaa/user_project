import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/atoms/Button";
import { fetchUserDetails, UserDetails } from "../services/userService";
import { ArrowLeft, ExternalLink,MapPin  } from "lucide-react";
import styled from "styled-components";
import ErrorBoundary from "../hoc/ErrorBoundary";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const DetailItem = styled.div`
text-align:center;
  margin-bottom: 10px;
`;
const TinyText = styled.p`
  margin:0 0 10px 0; 
  font-weight:500;
  font-size:12px;
`
const BackButton = styled(Button)`
  margin-top: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const UserDetailsPage: React.FC = () => {
  const { userId, username } = useParams<{
    userId: string;
    username: string;
  }>();


  const [user, setUser] = useState<UserDetails | null>(null);
  console.log("user", user);
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
        console.error("Failed to fetch user details", error);
        setError("User not found"); // Set error message if user details are not found
      }
    };

    fetchDetails();
  }, [userId]);

  if (error) {
    return (
      <DetailsContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <BackButton onClick={() => navigate(-1)}>Go Back</BackButton>
      </DetailsContainer>
    );
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <DetailsContainer>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeft />
        </BackButton>
        <DetailItem>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s profile`}
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </DetailItem>
        <DetailItem>
          <MapPin /><br/> 
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
