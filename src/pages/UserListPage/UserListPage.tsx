import { useState, useEffect, useCallback } from 'react';
import { SearchBar } from '../../components/molecules/SearchBar/SearchBar';
import { UserCard } from '../../components/molecules/UserCard/UserCard';
import { fetchUsers, User } from '../../services/userService';
import { Button } from '../../components/atoms/';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import { SkeletonCard } from '../../components/molecules/';
import { ArrowUpAZ, ArrowDownAZ } from 'lucide-react';
import { UserListPageContainer, ActionArea, UserList } from './UserListPage.style';

enum SortingDirection {
  ASC = 'asc',
  DESC = 'desc',
}
enum SortOption {
  LOGIN = 'login',
}

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usersPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<SortingDirection.ASC | SortingDirection.DESC>(
    SortingDirection.ASC
  );

  const fetchUsersForPage = useCallback(
    async (page: number) => {
      const controller = new AbortController();
      const signal = controller.signal;

      try {
        setIsLoading(true);
        const newUsers = await fetchUsers((page - 1) * usersPerPage, usersPerPage, signal);
        setUsers(newUsers);
        setCurrentPage(page);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setIsLoading(false);
      }

      return () => {
        controller.abort();
      };
    },
    [usersPerPage]
  );

  useEffect(() => {
    let cleanupFunction: () => void | undefined;

    const fetchData = async () => {
      cleanupFunction = await fetchUsersForPage(1);
    };

    fetchData();

    return () => {
      if (cleanupFunction) cleanupFunction();
    };
  }, [fetchUsersForPage]);

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
        const filtered = users.filter((user) => user.login.toLowerCase().includes(lowerQuery));
        setUsers(filtered);
        setCurrentPage(1);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = (key: keyof User) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return sortDirection === SortingDirection.ASC ? -1 : 1;
      if (a[key] > b[key]) return sortDirection === SortingDirection.ASC ? 1 : -1;
      return 0;
    });
    setUsers(sortedUsers);
    setSortDirection(
      sortDirection === SortingDirection.ASC ? SortingDirection.DESC : SortingDirection.ASC
    );
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
          <Button onClick={() => handleSort(SortOption.LOGIN)}>
            {sortDirection === SortingDirection.ASC ? <ArrowUpAZ /> : <ArrowDownAZ />}
          </Button>
        </ActionArea>

        <UserList>
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)
            : users.map((user) => <UserCard key={user.id} user={user} />)}
        </UserList>
        <div>
          {currentPage > 1 && !isLoading && <Button onClick={fetchPreviousPage}>Previous</Button>}
          {!isLoading && <Button onClick={fetchNextPage}>Next</Button>}
        </div>
      </UserListPageContainer>
    </ErrorBoundary>
  );
};

export default UserListPage;
