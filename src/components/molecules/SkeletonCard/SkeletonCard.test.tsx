import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SkeletonCard } from './SkeletonCard';
import { lightTheme } from '../../../mocks';

describe('SkeletonCard', () => {
  it('renders correctly when loading', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <div data-testid="skeleton-wrapper">
          <SkeletonCard />
        </div>
      </ThemeProvider>
    );

    const skeleton = screen.getByTestId('skeleton-wrapper');
    expect(skeleton).toBeInTheDocument();
  });
});
