import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserCard } from "./UserCard";
import { lightTheme } from "../../mocks";
import { User } from "../../services/userService";

describe("UserCard", () => {
  const mockUser: User = {
    id: 1,
    login: "mockUser",
    avatar_url: "https://mockavatarurl.com/avatar.jpg",
    html_url: "",
  };

  it("renders user information correctly", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Router>
          <UserCard user={mockUser} />
        </Router>
      </ThemeProvider>
    );

    const avatar = screen.getByAltText(`${mockUser.login}'s avatar`);
    const userName = screen.getByText(mockUser.login);
    const actionButton = screen.getByRole("button", { name: /view details/i });

    expect(avatar).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(actionButton).toBeInTheDocument();
  });

  it("navigates to the user's details page when the action button is clicked", () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Router>
          <UserCard user={mockUser} />
        </Router>
      </ThemeProvider>
    );

    const actionButton = screen.getByRole("button", { name: /view details/i });
    fireEvent.click(actionButton);

    expect(window.location.pathname).toBe(
      `/user/${mockUser.id}/${mockUser.login}`
    );
  });
});
