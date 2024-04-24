import { SkeletonContainer, Avatar, UserInfo, UserName, ActionButton } from './SkeletonCard.style';

export const SkeletonCard: React.FC = () => {
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
