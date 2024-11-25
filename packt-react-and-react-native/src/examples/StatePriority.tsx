import { ChangeEvent, startTransition, useState } from "react";
type Item = { id: number; name: string };
const unfilteredItems: Item[] = new Array(100000)
  .fill(null)
  .map((_, index) => ({ id: index, name: `Item ${index}` }));

const StatePriority = () => {
  const [filter, setFilter] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const OnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    startTransition(() => {
      setItems(
        e.target.value === ""
          ? []
          : unfilteredItems.filter((item) => item.name.includes(e.target.value))
      );
    });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={OnChange}
        />
      </div>
      <div>
        <ul>
          {items.map((item: Item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatePriority;
