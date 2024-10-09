import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading"> jsx created heading</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

// jsx ---Babel--> "React.createElement()" -> ReactElement / JS object -> rendered as HTML (DOM) element

root.render(jsxHeading);