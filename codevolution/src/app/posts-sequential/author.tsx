interface Author {
  id: number;
  name: string;
}

const Author = async ({ id }: { id: number }) => {
  const response = await fetch(
    `${process.env.NEXT_JSON_PLACEHOLDER_BASE_URL}/users/${id}`
  );
  const author: Author = await response.json();
  return (
    <div className="text-gray-500 text-sm">
      Written by:{" "}
      <span className="font-semibold text-grey-700 hover:text-grey-900 transition-colors">
        {author.name}
      </span>
    </div>
  );
};

export default Author;
