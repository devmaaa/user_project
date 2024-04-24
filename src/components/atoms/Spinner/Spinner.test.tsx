import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Spinner } from './Spinner';
import { lightTheme } from '../../../mocks';

describe('Spinner', () => {
  it('renders correctly when loading', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <div data-testid="spinner-wrapper">
          <Spinner />
        </div>
      </ThemeProvider>
    );

    const spinner = screen.getByTestId('spinner-wrapper');
    expect(spinner).toBeInTheDocument();
  });
});
