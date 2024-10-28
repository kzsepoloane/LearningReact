import { useCallback, useEffect, useState } from "react";

interface StateAppProps {
  name: string;
  age: number;
}

const StateApp = (props: StateAppProps) => {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);

  const fetchUser = useCallback(() => {
    return Promise.resolve({ name: "Karabo", age: 33 });
  }, []);
  useEffect(() => {
    fetchUser().then((user) => {
      setName(user.name);
      setAge(user.age);
    });
  }, []);
  return (
    <>
      <section>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>My name is {name}</p>
      </section>
      <section>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <p>My age is {age}</p>
      </section>
    </>
  );
};

export default StateApp;
