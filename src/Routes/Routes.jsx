import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CompanyDetailsLayout from "../CompanyDetailsLayout/CompanyDetailsLayout";
import { path } from "framer-motion/client";
import CompanyDetails from "../Pages/CompanyDetails";

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
                element: <h1>Contacts</h1>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/company-details',
        Component: CompanyDetailsLayout,
        children: [
            {
                path: '/company-details/:id',
                Component: CompanyDetails,
                loader: () => fetch('/companies_data.json').then(res => res.json()),
                hydrateFallbackElement: <h1>Loading</h1>
            }
        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])

export default router;