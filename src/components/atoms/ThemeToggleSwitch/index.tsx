import { useTheme } from '../../../themes/ThemeSwitcher';
import { ThemeModes } from '../../../themes/themes';
import { useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ToggleLabel, ToggleWrapper, HiddenCheckbox, Ball } from './ThemeToggleSwitch.style';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const handleToggleTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);
  return (
    <ToggleWrapper>
      <HiddenCheckbox
        id="checkbox"
        checked={theme.mode === ThemeModes.DARK}
        onChange={handleToggleTheme}
      />
      <ToggleLabel htmlFor="checkbox" className="theme-mode-label" data-testid="themeMode">
        <Sun color="#f39c12" width="14" />
        <Moon color="#f1c40f" width="14" />
        <Ball className="ball" checked={theme.mode === ThemeModes.DARK} />
      </ToggleLabel>
    </ToggleWrapper>
  );
};
