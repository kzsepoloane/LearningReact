import { useEffect, useState } from "react";
const Timer = () => {
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer == 0 ? 0 : prevTimer - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Timer: {timer}</h1>
    </div>
  );
};
export default Timer;
