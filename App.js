import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div",{id: "parent"},
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I am a heading"),
        React.createElement("h2", {}, "I am a smaller heading")
    ]),
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I am a heading"),
        React.createElement("h2", {}, "I am a much smaller heading")
    ])
);

const heading = React.createElement("h1",{id: "heading"}, "Hello world")

const root = ReactDOM.createRoot(document.getElementById("root")); // creates a root for the react to execute from (passing in root id of the div)

root.render(heading);
root.render(parent);

