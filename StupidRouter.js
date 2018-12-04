import React, { useState, Suspense, lazy, Fragment } from "react";
import { render } from "react-dom";

const routes = {
  Hooks: lazy(() => import("./Hooks")),
  Lazy: lazy(() => import("./Lazy")),
  Cache: lazy(() => import("./Cache")),
  Effects: lazy(() => import("./Effects"))
};

const Router = () => {
  const [route, setRoute] = useState("Hooks");

  const Comp = routes[route];

  return (
    <Fragment>
      <nav style={{ border: "1px solid black", padding: "15px" }}>
        {Object.keys(routes).map(key => (
          <button key={key} onClick={() => setRoute(key)}>
            {key}
          </button>
        ))}
      </nav>
      <Suspense fallback={<h1>Loading</h1>}>
        <Comp />
      </Suspense>
    </Fragment>
  );
};

render(<Router />, document.getElementById("target"));
