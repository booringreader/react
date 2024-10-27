import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

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
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        console.log(btnName);
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;