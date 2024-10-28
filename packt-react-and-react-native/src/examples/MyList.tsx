interface MyListProps {
  items: string[];
}

const MyList = ({ items }: MyListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default MyList;
