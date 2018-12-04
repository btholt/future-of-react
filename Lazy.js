import React, { lazy, useState, Fragment, Suspense } from "react";

const LazyModal = lazy(() => import("./Modal"));

const LazyExample = () => {
  const [showModal, setModal] = useState(false);
  return (
    <div>
      <button onClick={() => setModal(!showModal)}>Toggle Modal</button>
      {showModal ? (
        <Suspense>
          <LazyModal>
            <Fragment>
              <h1>This is a lazy modal!!</h1>
              <button onClick={() => setModal(!showModal)}>Toggle Modal</button>
            </Fragment>
          </LazyModal>
        </Suspense>
      ) : null}
    </div>
  );
};

export default LazyExample;
