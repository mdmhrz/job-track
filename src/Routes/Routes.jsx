import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
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
                element: <h1>Login</h1>
            },
            {
                path: '/register',
                element: <h1>Register</h1>
            }
        ]
    },
    {
        path: '/*',
        element: <h1>Error 404</h1>
    }
])

export default router;