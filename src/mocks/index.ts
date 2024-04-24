import { DefaultTheme } from 'styled-components';
import { User } from '../services/userService';

export enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}

export const mockUser: User = {
  id: 1,
  login: 'mockUser',
  avatar_url: 'https://mockavatarurl.com/avatar.jpg',
  html_url: '',
};

const baseTheme = {
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
    extraLarge: '1200px',
  },
  spinner: {
    background: '#de3500',
    gradient_color: '#ddd',
  },
};

export const lightTheme: DefaultTheme = {
  mode: ThemeModes.LIGHT,
  ...baseTheme,
  colors: {
    link: '#1A73E8',
    border: '#e5e7eb',
    background: 'rgb(255, 255, 255)',
    text: '#333',
    primary: '#09090B',
    button: {
      background: '#F3F4F6',
      border: '#D1D5DB',
      text: '#09090b',
      backgroundHover: '#e1e1e1',
      textHover: '#FFF',
    },
    skeletonCard: {
      gradient: 'linear-gradient(-45deg, #dddddd, #f0f0f0, #dddddd, #f0f0f0)',
      background: '#f0f0f0',
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  mode: ThemeModes.DARK,
  colors: {
    link: '#1A73E8',
    background: ' rgb(51, 51, 51)',
    border: '#2d2d2d',
    text: '#FFF',
    primary: '#FAFAFA',
    button: {
      background: '#29292b',
      border: '#171717',
      text: '#fafafa',
      backgroundHover: '#171717',
      textHover: '#333',
    },
    skeletonCard: {
      gradient: 'linear-gradient(-45deg, #333333, #555555, #333333, #555555)',
      background: '#2e2e2e',
    },
  },
};
