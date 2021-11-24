import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";
import DetailBook from "../pages/my/book/detail-book";
import Book from "../pages/my/book/index";
import AdminBook from "../pages/admin/book";
import Rent from "../pages/admin/rent";
import AdminMember from "../pages/admin/member";
import AddBook from "../pages/admin/book/add";
import Home from "../pages/landing/home";
import Profile from "../pages/my/profile/profile";
import StatusBook from "../pages/my/book/status-book";
import Register from "../pages/register/register";
import NotFound from "../pages/not-found";

export const routes = [
  {
    path: "/auth/login",
    component: <Login />,
  },
  {
    path: "/register", //register page
    component: <Register />,
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

  // PENGGUNA / Anggota perpustakaan
  {
    path: "/my/",
    component: <Home />, //user home page
  },
  {
    path: "/my/profile",
    component: <Profile />, //profile page
  },
  {
    path: "/my/book",
    component: <Book />, //search result page
  },
  {
    path: "/my/book/:id",
    component: <DetailBook />, //detail book page
  },
  {
    path: "/my/book/status",
    component: <StatusBook />, //status information page
  },
  {
    path: "*",
    component: <NotFound />,
  },
];
