// TODO - Header, Body, Footer
/* 
*   Header
    - Logo
    - Navbar Links
*   Body
    - Search Bar
    - Restaurant cards
* Footer
    - Copyright
    - Social links
*/
// ? component(div(div(div)))

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const stylecard = { // ? js object
    backgroundColor: "yellow"
}
const RestaurantCard = () => {
    return (
        <div className="res-card" style={stylecard}>
            <h3>The Green Bean</h3>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
