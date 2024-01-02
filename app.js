// const heading = document.createElement("h1");

// const root = document.getElementById("root");

// heading.innerHTML="Hello World Using JS";

// root.appendChild(heading);

const heading = React.createElement("h1",{id:"hii"},"Hello World Using REACT");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

