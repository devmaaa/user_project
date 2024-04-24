import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './index';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../mocks';

describe('SearchBar', () => {
  it('renders an input element', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <SearchBar onSearch={jest.fn()} />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText(/search users by name.../i)).toBeInTheDocument();
  });

  it('calls onSearch with the input value when changed', () => {
    const handleSearchMock = jest.fn();
    render(
      <ThemeProvider theme={lightTheme}>
        <SearchBar onSearch={handleSearchMock} />
      </ThemeProvider>
    );
    const input = screen.getByPlaceholderText(/search users by name.../i);
    fireEvent.change(input, { target: { value: 'John Doe' } });
    expect(handleSearchMock).toHaveBeenCalledWith('John Doe');
  });
});
