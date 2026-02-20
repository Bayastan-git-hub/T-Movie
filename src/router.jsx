import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Discover from "./pages/Discover/Discover";
import Blog from "./pages/Blog/Blog";
import Artists from "./pages/Artists/Artists";
import Watchlist from "./pages/Watchlist/Watchlist";
import ContactUs from "./pages/ContactUs/ContactUs";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Setting from "./pages/Setting/Setting";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Registr/Registr";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Discover />,
      },
      {
        path: "watchlist",
        element: <Watchlist />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "helpcenter",
        element: <HelpCenter />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registr",
    element: <Register />,
  },
]);
