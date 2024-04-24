import { SkeletonContainer, Avatar, UserInfo, UserName, ActionButton } from './SkeletonCard.style';
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