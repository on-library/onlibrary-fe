import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";
import DetailBook from "../pages/my/book/detail-book";
import Book from "../pages/my/book/index";
import AdminBook from "../pages/admin/book";
import Rent from "../pages/admin/rent";
import AdminMember from "../pages/admin/member";
import AddBook from "../pages/admin/book/add";

export const routes = [
  {
    path: "/auth/login",
    component: <Login />,
  },

  // ADMIN
  {
    path: "/admin/",
    component: <Dashboard />,
  },
  {
    path: "/admin/book",
    component: <AdminBook />,
  },
  {
    path: "/admin/book/add",
    component: <AddBook />,
  },
  {
    path: "/admin/member",
    component: <AdminMember />,
  },
  {
    path: "/admin/rent",
    component: <Rent />,
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
