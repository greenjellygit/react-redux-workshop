import SearchContainer from "../containers/search.container";
import AuthContainer from "../containers/auth.container";

export const rootRoutes = [
  {
    component: AuthContainer,
    path: '/',
    exact: true,
  },
  {
    component: SearchContainer,
    path: '/search',
    exact: true,
  },
];
