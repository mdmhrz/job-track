import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CompanyDetailsLayout from "../CompanyDetailsLayout/CompanyDetailsLayout";
import { path } from "framer-motion/client";
import CompanyDetails from "../Pages/CompanyDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Loading from "../Pages/Loading";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "./PrivateRoute";
import HotJobs from "../Pages/HotJobs";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/hotJobs',
                element: <PrivateRoute><HotJobs></HotJobs></PrivateRoute>
            }
        ]
    },
    {
        path: '/company-details',
        Component: CompanyDetailsLayout,
        children: [
            {
                path: '/company-details/:id',
                element: <PrivateRoute><CompanyDetails></CompanyDetails></PrivateRoute>,
                loader: () => fetch('/companies_data.json').then(res => res.json()),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])

export default router;