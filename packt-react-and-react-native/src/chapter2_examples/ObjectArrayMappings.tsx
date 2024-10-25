const array: string[] = ["First", "Second", "Third"];
const object: { first: number; second: number; third: number } = {
  first: 1,
  second: 2,
  third: 3,
};

const ObjectArrayMappings = () => {
  return (
    <section>
      <h1>Array</h1>
      <ul>
        {array.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <h1>Object</h1>
      <ul>
        {Object.keys(object).map((i) => (
          <li key={i}>
            <strong>{i}: </strong>
            {object[i as keyof typeof object]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ObjectArrayMappings;
