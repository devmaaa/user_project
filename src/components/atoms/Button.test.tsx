import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../mocks';



describe('Button', () => {
  test('renders children correctly', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <Button>Click me</Button>
      </ThemeProvider>
    );
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  test('renders with primary style when primary is true', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <Button primary>Click me</Button>
      </ThemeProvider>
    );
    const button = screen.getByText(/click me/i);
    expect(button).toHaveStyle(`background-color: ${mockTheme.colors.button.background}`);
    expect(button).toHaveStyle(`color: ${mockTheme.colors.button.text}`);
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={mockTheme}>
        <Button onClick={handleClick}>Click me</Button>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('changes styles on hover', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <Button primary>Hover me</Button>
      </ThemeProvider>
    );
    const button = screen.getByText(/hover me/i);
    fireEvent.mouseOver(button);
  });
});

