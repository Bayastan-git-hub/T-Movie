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
import AuthLayout from "./components/AuthLayout/AuthLayout";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Discover/>
            },
            {
                path: "watchlist",
                element: <Watchlist/>
            },
            {
                path: "blog",
                element: <Blog/>
            },
            {
                path: "artists",
                element: <Artists/>
            },
            {
                path: "contactus",
                element: <ContactUs/>
            },
            {
                path: "helpcenter",
                element: <HelpCenter/>
            },
            {
                path: "setting",
                element: <Setting/>
            },

        ]
    },
    {               
                path: "login",
                element: <Login/>
            
    }
])
