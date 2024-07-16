import ReactDOM from "react-dom";
import React, { useEffect, Suspense } from "react";
import { inject, unmount } from "remote18/appInjector";
import DemoComp from "remote16/DemoComp";

import "./index.css";

const parentElementId = "parent";

function App() {
  useEffect(() => {
    inject(parentElementId);
    return () => unmount(parentElementId);
  }, []);

  return (
    <div className="container">
      <h5>Host Application (React 16)</h5>
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <Suspense fallback={<div>Loading...</div>}>
        <DemoComp />
      </Suspense>
      <div id={parentElementId}></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
