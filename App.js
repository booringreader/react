const heading = React.createElement("h1",{id: "heading"}, "Hello world")

const root = ReactDOM.createRoot(document.getElementById("root")); // creates a root for the react to execute from (passing in root id of the div)

root.render(heading);

