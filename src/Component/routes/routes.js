import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home";
import About from "../../pages/About/About";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/home", element: <Home></Home> },
            { path: "/about", element: <About></About> },

        ]
    },
    { path: "*", element: <div>This Page is not found</div> }

])

export default routes;
