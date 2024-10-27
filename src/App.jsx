import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import RestaurantCard from "./components/RestaurantCard.js"
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Instamart from "./components/Instamart.js";

const Instamart = lazy(() => import("./components/Instamart.js"));
const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Outlet />
    </div>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense><About /></Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "Grocery",
                element: (
                    <Suspense fallback={<div>"Loading..</div>}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: "/restaurants/:resId", // accessed via useParams() hook
                element: <RestaurantMenu /> // ':' tells the react-router-dom that the following is a dynamic entity
            }
        ],
        errorElement: <Error />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
