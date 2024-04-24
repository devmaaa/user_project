import { useTheme } from "../../themes/ThemeSwitcher";
import { ThemeModes } from "../../themes/themes";
import { useCallback } from "react";
import { Sun, Moon } from "lucide-react";
import { styled } from "styled-components";

interface BallProps {
  checked: boolean;
}

const ToggleWrapper = styled.div`
  display: inline-block;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
`;

const ToggleLabel = styled.label`
  background-color: #111;
  width: 50px;
  border-radius: 50px;
  position: relative;
  padding: 2px 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Ball = styled.span<BallProps>`
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 3px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.2s ease;
  transform: translateX(${(props) => (props.checked ? "30px" : "2px")});
`;

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
      <ToggleLabel htmlFor="checkbox" className="theme-mode-label"  data-testid='themeMode'>
        <Sun color="#f39c12" width="14" />
        <Moon color="#f1c40f" width="14" />
        <Ball className="ball" checked={theme.mode === ThemeModes.DARK} />
      </ToggleLabel>
    </ToggleWrapper>
  );
};
