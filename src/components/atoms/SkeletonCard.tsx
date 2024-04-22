import React from "react";
import styled, { keyframes } from "styled-components";

const pulsateAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const Pulsate = styled.div`
  background:${({ theme }) => theme.colors.skeletonCard.gradient};
  background-size: 400% 400%;
  animation: ${pulsateAnimation} 2.25s ease infinite;
`;
const SkeletonContainer = styled.div`
  max-height: 167px;
  background-color: ${({ theme }) => theme.colors.skeletonCard.background};
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  width: min(180px, 100%);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  @media screen and (max-width: 468px) {
    width: 100%;
    flex-direction:row;
    max-height:82px;
  }
`;

const Avatar = styled(Pulsate)`
  width: 50px;
  height: 50px;
  background-color: #d0d0d0;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserName = styled(Pulsate)`
  width: 100px;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const ActionButton = styled(Pulsate)`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
`;
const SkeletonCard: React.FC = () => {
  return (
    <SkeletonContainer>
      <UserInfo>
        <Avatar />
      </UserInfo>
      <UserName />
      <ActionButton />
    </SkeletonContainer>
  );
};

export default SkeletonCard;
