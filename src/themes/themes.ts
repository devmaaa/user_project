import { DefaultTheme } from "styled-components";

export enum ThemeModes {
  LIGHT = "light",
  DARK = "dark",
}

export const lightTheme: DefaultTheme = {
  mode: ThemeModes.LIGHT,
  colors: {
    link: "#1A73E8",
    border: "#e5e7eb",
    background: "#FFF",
    text: "#333",
    primary: "#007BFF",
    button: {
      background: "#007BFF",
      text: "#FFF",
      backgroundHover: "#0056b3",
      textHover: "#FFF",
    },
  },
};

export const darkTheme: DefaultTheme = {
  mode: ThemeModes.DARK,
  colors: {
    link: "#1A73E8",
    background: "#333",
    border: "#2d2d2d",
    text: "#FFF",
    primary: "#1A73E8",
    button: {
      background: "#1A73E8",
      text: "#333",
      backgroundHover: "#0f4c81",
      textHover: "#FFF",
    },
  },
};
