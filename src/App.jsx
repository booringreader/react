import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import RestaurantCard from "./components/RestaurantCard.js"
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
// import Instamart from "./components/Instamart.js";
import { Provider } from "react-redux";
import appStore from "./redux/appStore.js";
import Cart from "./components/Cart.js"

const Instamart = lazy(() => import("./components/Instamart.js"));
const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
    const [username, setUserName] = useState();
    useEffect(() => {
        // fetch data from API
        const data = {
            name: "perman",
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: username, setUserName }}>
                <div className="app"> {/* entire app wrapped around the context */}
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

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
                path: "Cart",
                element: <Cart />,
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
