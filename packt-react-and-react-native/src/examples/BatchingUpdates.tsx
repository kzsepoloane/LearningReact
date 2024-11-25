import { useState } from "react";

const BatchingUpdates = () => {
  const [value, setValue] = useState("loading...");
  const onStart = () => {
    setTimeout(() => {
      for (let index = 0; index < 100; index++) {
        setValue(`value ${index + 1}`);
      }
    }, 1);
  };

  return (
    <div>
      <p>
        Value: <em>{value}</em>
      </p>
      <button onClick={onStart}>Start</button>
    </div>
  );
};

export default BatchingUpdates;
