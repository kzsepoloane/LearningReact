import { createRef, useCallback, useMemo } from "react";

const Hooks = () => {
  const inputRef = createRef<HTMLInputElement>();

  const handleClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const user: { name: string; age: number } = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1e7; i++) {
      sum += i;
    }
    return { name: "Karabo", age: 33, sum: sum };
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} value={user.name} />
      <button onClick={handleClick}>Focus Input {user.age}</button>
    </div>
  );
};

export default Hooks;
