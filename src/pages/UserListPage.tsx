import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchBar } from "../components/molecules/SearchBar";
import { UserCard } from "../components/molecules/UserCard";
import { fetchUsers, User } from "../services/userService";
import { Button } from "../components/atoms/Button";
import ErrorBoundary from "../hoc/ErrorBoundary";
import SkeletonCard from "../components/atoms/SkeletonCard";
import { ArrowUpAZ, ArrowDownAZ } from "lucide-react";


const UserListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ActionArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const UserList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  @media screen and (max-width: 468px) {
    height:70vh;
    overflow-x:auto;
  }
`;

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usersPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
 

  const fetchUsersForPage = async (page: number) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      setIsLoading(true);
      const newUsers = await fetchUsers(
        (page - 1) * usersPerPage,
        usersPerPage,
        signal
      );
      setUsers(newUsers);
      setCurrentPage(page);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setIsLoading(false);
    }

    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    let cleanupFunction: () => void | undefined;

    const fetchData = async () => {
      cleanupFunction = await fetchUsersForPage(1);
    };

    fetchData();

    return () => {
      if (cleanupFunction) cleanupFunction();
    };
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      if (!query) {
        const controller = new AbortController();
        const signal = controller.signal;
        const newUsers = await fetchUsers(0, usersPerPage, signal);
        setUsers(newUsers);
        setCurrentPage(1);
      } else {
        const lowerQuery = query.toLowerCase();
        const filtered = users.filter((user) =>
          user.login.toLowerCase().includes(lowerQuery)
        );
        setUsers(filtered);
        setCurrentPage(1);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = (key: keyof User) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return sortDirection === "asc" ? -1 : 1;
      if (a[key] > b[key]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    setUsers(sortedUsers);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const fetchNextPage = () => {
    fetchUsersForPage(currentPage + 1);
  };

  const fetchPreviousPage = () => {
    if (currentPage > 1) {
      fetchUsersForPage(currentPage - 1);
    }
  };

  return (
    <ErrorBoundary>
      <UserListPageContainer>
        <ActionArea>
          <SearchBar onSearch={handleSearch} />
          <Button onClick={() => handleSort("login")}>
            {sortDirection === "asc" ? <ArrowUpAZ /> : <ArrowDownAZ />}
          </Button>
        </ActionArea>

        <UserList>
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : users.map((user) => <UserCard key={user.id} user={user} />)}
        </UserList>
        <div>
          {currentPage > 1 && !isLoading && (
            <Button onClick={fetchPreviousPage}>Previous</Button>
          )}
          {!isLoading && <Button onClick={fetchNextPage}>Next</Button>}
        </div>
      </UserListPageContainer>
    </ErrorBoundary>
  );
};

export default UserListPage;
