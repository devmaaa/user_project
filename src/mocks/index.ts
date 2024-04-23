import { DefaultTheme } from 'styled-components';

export const mockTheme: DefaultTheme = {
  mode: 'light',
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
    extraLarge: '1200px',
  },
  spinner: {
    background: "#de3500",
    gradient_color:"#ddd",
  },
  colors: {
    link: "#1A73E8",
    background: "#FFF",
    border: "#e5e7eb",
    text: "#333",
    primary: "#09090B",
    button: {
      background: "#F3F4F6",
      border: "#D1D5DB",
      text: "#09090b",
      backgroundHover: "#e1e1e1",
      textHover: "#FFF",
    },
    skeletonCard: {
      gradient: "linear-gradient(-45deg, #dddddd, #f0f0f0, #dddddd, #f0f0f0)",
      background: "#f0f0f0"
    }
  },
};