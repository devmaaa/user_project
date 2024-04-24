import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './index';
import { lightTheme } from '../../../mocks';

describe('Header', () => {
  it('renders navigation links correctly', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const userListLink = screen.getByRole('link', { name: /user list/i });

    expect(homeLink).toBeInTheDocument();
    expect(userListLink).toBeInTheDocument();
  });

  it("applies 'active' class to the active link", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveClass('active');
  });
});
