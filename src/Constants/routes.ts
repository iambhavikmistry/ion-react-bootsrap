import Profile from "../pages/auth/Profile";
import Settings from "../pages/auth/Settings";
import Home from "../pages/Home";
import { Route } from "../Types/Routes";

export const routes: Route[] = [
  {
    path: "/home",
    component: Home,
    exact: true,
    auth: true,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    auth: true,
  },
  {
    path: "/settings",
    component: Settings,
    exact: true,
    auth: true,
  },
];
