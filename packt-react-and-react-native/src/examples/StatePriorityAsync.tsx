import { ChangeEvent, startTransition, useState } from "react";
type Item = { id: number; name: string };
const unfilteredItems: Item[] = new Array(100000)
  .fill(null)
  .map((_, index) => ({ id: index, name: `Item ${index}` }));

const filterItems = (filter: string): Promise<Item[]> => {
  const promise = new Promise<Item[]>((resolve) => {
    setTimeout(() => {
      const filteredItems = unfilteredItems.filter((item) =>
        item.name.includes(filter)
      );
      resolve(filteredItems);
    });
  });
  return promise;
};
const StatePriorityAsync = () => {
  const [filter, setFilter] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  //const [isPending, startTransition] = useTransition();
  const OnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setIsLoading(true);
    startTransition(() => {
      if (e.target.value === "") {
        setItems([]);
        setIsLoading(false);
      } else {
        filterItems(e.target.value).then((filteredItems) => {
          setItems(filteredItems);
          setIsLoading(false);
        });
      }
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
        {isLoading && <em>loading...</em>}
        <ul>
          {items.map((item: Item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatePriorityAsync;
