import React, { useEffect, useState } from "react";

function EffectsExample() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      document.title = `Clicked ${count} times`;
      return () => (document.title = "Modern React");
    },
    [count]
  );

  return (
    <div>
      <p>You clicked {count} times. Look at the tab title</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default EffectsExample;
