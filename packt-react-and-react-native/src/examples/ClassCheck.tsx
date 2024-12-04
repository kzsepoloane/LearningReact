import { useState } from "react";

const ClassCheck = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <button
        className={clicked ? "active" : ""}
        onClick={() => setClicked(!clicked)}
        data-testid="button"
      >
        Click me
      </button>
      {clicked && <div data-testid="hello">Hello</div>}
    </>
  );
};
export default ClassCheck;
