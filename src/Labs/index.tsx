import { Routes, Route, Navigate } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import TOC from "./TOC";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <TOC />
        <h1>Welcome to Web Dev!!</h1><br/>
        Name: Roslyn Maloney<br/>
        Section: CS4550 sec 1<br/>
        <a id="wd-web-github-link" target="_blank" href="https://github.com/roslyn-maloney/kanbas-react-web-app/tree/a5">WebApp Github:</a>
        <a id="wd-web-github-link" target="_blank" href="https://github.com/roslyn-maloney/kanbas-node-server-app">ServerApp Github:</a>
        <h1>Labs</h1>
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="/Lab3/*" element={<Lab3 />} />
          <Route path="/Lab4/*" element={<Lab4 />} />
          <Route path="/Lab5/*" element={<Lab5/>} />
        </Routes>
      </div>
    </Provider>
  );
}