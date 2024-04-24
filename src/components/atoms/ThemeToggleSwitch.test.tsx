import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggleSwitch";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../mocks";

describe("ThemeToggle", () => {
  it("starts in light mode and switches to dark on click", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggle = screen.getByTestId(/themeMode/i);
    expect(toggle).toBeInTheDocument();

    fireEvent.click(toggle);

    expect(document.body).toHaveStyle({
      backgroundColor: darkTheme.colors.background,
    });
  });
});
