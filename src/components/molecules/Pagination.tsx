import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => (
  <PaginationContainer>
    {Array.from({ length: totalPages }, (_, index) => (
      <Button
        key={index + 1}
        primary={currentPage === index + 1}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </Button>
    ))}
  </PaginationContainer>
);
