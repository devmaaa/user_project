import { useState, ChangeEvent, FC } from "react";
import styled from "styled-components";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void;
}

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.button.backgroundHover};
  }
`;

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <StyledInput
      type="text"
      placeholder="Search users by name..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};
