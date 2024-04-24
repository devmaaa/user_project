import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { UserCard } from './index';
import { lightTheme, mockUser } from '../../../mocks';

describe('UserCard', () => {
  it('renders user information correctly', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Router>
          <UserCard user={mockUser} />
        </Router>
      </ThemeProvider>
    );

    const avatar = screen.getByAltText(`${mockUser.login}'s avatar`);
    const userName = screen.getByText(mockUser.login);
    const actionButton = screen.getByRole('button', { name: /view details/i });

    expect(avatar).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(actionButton).toBeInTheDocument();
  });

  it("navigates to the user's details page when the action button is clicked", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Router>
          <UserCard user={mockUser} />
        </Router>
      </ThemeProvider>
    );

    const actionButton = screen.getByRole('button', { name: /view details/i });
    fireEvent.click(actionButton);

    expect(window.location.pathname).toBe(`/user/${mockUser.id}/${mockUser.login}`);
  });
});
