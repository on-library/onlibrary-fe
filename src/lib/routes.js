import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";
import DetailBook from "../pages/my/book/detail-book";
import Book from "../pages/my/book";

export const routes = [
  {
    path: "/auth/login",
    component: <Login />,
  },

  // ADMIN
  {
    path: "/admin/dashboard",
    component: <Dashboard />,
  },

  // PENGGUNA
  {
    path: "/my/book",
    component: <Book />,
  },
  {
    path: "/my/book/:id",
    component: <DetailBook />,
  },
];
