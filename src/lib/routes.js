import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";
import DetailBook from "../pages/my/book/detail-book";
import Book from "../pages/my/book/index";
import AdminBook from "../pages/admin/book";
import RentAdmin from "../pages/admin/rent";
import AdminMember from "../pages/admin/member";
import AddBook from "../pages/admin/book/add";
import Home from "../pages/landing/home";
import Profile from "../pages/my/profile/profile";
import StatusBook from "../pages/my/book/status-book";
import Register from "../pages/register/register";
import NotFound from "../pages/not-found";
import Rent from "../pages/my/rent";
import LandingPage from "../pages/landing";

export const routes = [
  {
    component: <LandingPage />,
  },
  {
    path: "/auth/login",
    component: <Login />,
    guard: 0,
  },
  {
    path: "/auth/register", //register page
    component: <Register />,
  },

  // ADMIN
  {
    path: "/admin",
    component: <Dashboard />,
    guard: 2,
  },
  {
    path: "/admin/book",
    component: <AdminBook />,
    guard: 2,
  },
  {
    path: "/admin/book/add",
    component: <AddBook />,
    guard: 2,
  },
  {
    path: "/admin/member",
    component: <AdminMember />,
    guard: 2,
  },
  {
    path: "/admin/rent",
    component: <RentAdmin />,
    guard: 2,
  },

  // PENGGUNA / Anggota perpustakaan
  {
    path: "/my/",
    component: <Home />, //user home page
    guard: 1,
  },
  {
    path: "/my/profile",
    component: <Profile />, //profile edit page
    guard: 1,
  },
  {
    path: "/my/rent",
    component: <Rent />, //status information page
    guard: 1,
  },
  {
    path: "/my/book",
    component: <Book />, //might delete
    guard: 1,
  },
  {
    path: "/my/book/:id",
    component: <DetailBook />, //detail book page
    guard: 1,
  },
  {
    path: "/my/book/status",
    component: <StatusBook />, //might delete
  },
  {
    path: "*",
    component: <NotFound />,
  },
];
