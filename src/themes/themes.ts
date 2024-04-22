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
    primary: "#09090B",
    button: {
      background: "#F3F4F6",
      border:"#D1D5DB",
      text: "#09090b",
      backgroundHover: "#e1e1e1",
      textHover: "#FFF",
    },
    skeletonCard:{
      gradient: "linear-gradient(-45deg, #dddddd, #f0f0f0, #dddddd, #f0f0f0)",
      background: "#f0f0f0"
    }
  },
};

export const darkTheme: DefaultTheme = {
  mode: ThemeModes.DARK,
  colors: {
    link: "#1A73E8",
    background: "#333",
    border: "#2d2d2d",
    text: "#FFF",
    primary: "#FAFAFA",
    button: {
      background: "#29292b",
      border:"#171717",
      text: "#fafafa",
      backgroundHover: "#171717",
      textHover: "#333",
    },
    skeletonCard:{
      gradient: "linear-gradient(-45deg, #333333, #555555, #333333, #555555)",
      background: "#2e2e2e"
    }
    
  },
};
