import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px dashed black" }}>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default Button;
