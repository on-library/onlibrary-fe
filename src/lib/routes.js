import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";

export const routes = [
  {
    path: "/auth/login",
    component: <Login />,
  },
  {
    path: "/admin/dashboard",
    component: <Dashboard />,
  },
];
