export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface UserDetails {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  email: string | null;
  location: string | null;
  bio: string | null;
}



const BASE_URL = "https://api.github.com/users";

export const fetchUsers = async (
  since: number = 0,
  perPage: number = 10,
  signal: AbortSignal
): Promise<User[]> => {
  const response = await fetch(
    `${BASE_URL}?per_page=${perPage}&since=${since}`,
    { signal }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export const fetchUserDetails = async (
  userId: string,
): Promise<UserDetails> => {
  const response = await fetch(`${BASE_URL}/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user details");
  }
  return response.json();
};
