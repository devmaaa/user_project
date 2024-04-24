export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface UserDetails extends User {
  name: string | null;
  email: string | null;
  location: string | null;
  bio: string | null;
}

const BASE_URL = 'https://api.github.com';
const token = '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';
export const fetchUsers = async (
  since: number = 0,
  perPage: number = 10,
  signal: AbortSignal
): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}/users?per_page=${perPage}&since=${since}`, {
    signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

export const fetchUserDetails = async (userId: string): Promise<UserDetails> => {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user details');
  }
  return response.json();
};
