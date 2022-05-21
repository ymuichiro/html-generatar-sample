"use strict";
const App = () => {
    const [state, setState] = React.useState(0);
    const clickHandle = () => {
        setState(s => s + 1);
    };
    return React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: clickHandle }, "count"),
        React.createElement("div", null,
            "result: ",
            state));
};
console.log(ReactDOMServer);
console.log(ReactDOMServer.renderToStaticMarkup(React.createElement(App, undefined)));
console.log(ReactDOMServer.renderToString(React.createElement(App, undefined)));
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, undefined));
