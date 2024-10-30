import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between bg-gray-300 shadow-lg mb-2 px-2">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4">Online: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/grocery">Instamart</Link></li>
                    <li className="px-4"><Link to="about">About Us</Link></li>
                    <li className="px-4"><Link to="contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login border px-2 rounded-lg bg-white border-black" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-2">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;