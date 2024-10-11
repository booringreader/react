import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React functional component
const Title = function() { // written as normal function instead of an arrow function
    return (
        <h1> React Tut</h1>
    );
};
const HeadingComponent = () => (
        // component composition
        <div className="container">
            <h1>functional component</h1> {/* returns <h1></h1> */}
            <Title />
            {<Title()>}
            <Title> </Title>
        </div>
    );
//const HeadingComponent = () => (
//    // component composition
//    <div className="container">
//        <h1>functional component</h1> {/* returns <h1></h1> */}
//        <Title />
//    </div>
//);

// React Element
const headingElement = (
    <h1>react element</h1>
);
root.render(<HeadingComponent />);
// root.render(<Title />);
// root.render(headingElement);