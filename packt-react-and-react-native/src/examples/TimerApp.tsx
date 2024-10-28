import { useState } from "react";
import ShowHideTimer from "./ShowTimer";

function TimerApp() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>
      <ShowHideTimer show={show} />
    </>
  );
}

export default TimerApp;
