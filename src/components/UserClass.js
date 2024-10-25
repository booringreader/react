// ! class based component of user card
// ? class based component is a normal js class
import React from "react";
import { GITHUB_USER_URL } from "../utils/constants";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // local state variable 
            userinfo: {
                name: "Loading...",
                avatar_url: "image",
                login: "@!",
                location: "Earth",
            },
        };
        console.log("constructor called");
    }

    async componentDidMount() {
        const data = await fetch(GITHUB_USER_URL);
        const json = await data.json();
        console.log(json);

        this.setState({ // load the json data into the state variable
            userinfo: json,
        });

        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("component unmounted");
    }
    render() {
        const { name, location, avatar_url, login } = this.state.userinfo;
        console.log("render complete");
        return (
            <div className="user-card" >
                <div className="about-image-container">
                    <img className="about-image" src={avatar_url} />
                </div>

                <h2>username: {name}</h2>
                <h3>location: {location}</h3>
                <h3>userID: {login}</h3>
            </div>
        )
    }
}
export default UserClass;