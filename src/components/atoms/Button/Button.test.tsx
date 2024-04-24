import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../mocks';

describe('Button', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button>Click me</Button>
      </ThemeProvider>
    );
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('renders with primary style when primary is true', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button primary>Click me</Button>
      </ThemeProvider>
    );
    const button = screen.getByText(/click me/i);
    expect(button).toHaveStyle(`background-color: ${lightTheme.colors.button.background}`);
    expect(button).toHaveStyle(`color: ${lightTheme.colors.button.text}`);
  });

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={lightTheme}>
        <Button onClick={handleClick}>Click me</Button>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('changes styles on hover', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button primary>Hover me</Button>
      </ThemeProvider>
    );
    const button = screen.getByText(/hover me/i);
    fireEvent.mouseOver(button);
  });
});
