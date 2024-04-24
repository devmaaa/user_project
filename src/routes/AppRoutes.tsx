import { ComponentType, lazy, LazyExoticComponent } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/'));
const UserListPage = lazy(() => import('../pages/UserListPage/'));
const UserDetailsPage = lazy(() => import('../pages/UserDetailsPage/'));

export enum RoutePaths {
  Home = '/',
  UserList = '/users',
  UserDetails = '/user/:userId/:username',
}

const getComponentName = (component: ComponentType) => {
  return component.displayName || component.name;
};

const createRoute = (path: RoutePaths, component: LazyExoticComponent<ComponentType<any>>) => ({
  path,
  component,
  name: getComponentName(component),
});

const routes = [
  createRoute(RoutePaths.Home, HomePage),
  createRoute(RoutePaths.UserList, UserListPage),
  createRoute(RoutePaths.UserDetails, UserDetailsPage),
];

export default routes;
