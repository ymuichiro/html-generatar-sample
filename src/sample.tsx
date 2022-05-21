declare class ReactDOMServer {
  static renderToStaticMarkup(e: any): any;
  static renderToString(e: any): any;
}
declare class ReactDOM { static createRoot(e: any): any; }

const App = () => {
  const [state, setState] = React.useState(0);

  const clickHandle = () => {
    setState(s => s + 1);
  };

  return <>
    <button onClick={clickHandle}>count</button>
    <div>result: {state}</div>
  </>;
};

console.log(ReactDOMServer);
console.log(ReactDOMServer.renderToStaticMarkup(React.createElement(App, undefined)));
console.log(ReactDOMServer.renderToString(React.createElement(App, undefined)));
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, undefined));
