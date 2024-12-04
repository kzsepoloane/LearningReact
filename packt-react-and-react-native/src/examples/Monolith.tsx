import { ChangeEvent, useCallback, useState } from "react";
import Article from "./models/Article";

const id = (function* () {
  let id = 0;
  while (true) {
    yield id++;
  }
})();

const Articles: Article[] = Array.from({ length: 10 }, () => {
  const currentId = id.next().value;
  return {
    id: currentId,
    title: `Article ${currentId}`,
    summary: `Summary ${currentId}`,
    display: "block",
  };
});

const Monolith = () => {
  const [articles, setArticles] = useState<Article[]>(Articles);
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeSummary = (event: ChangeEvent<HTMLInputElement>) => {
    setSummary(event.target.value);
  };

  const onClickAdd = useCallback(() => {
    setArticles((state) => [
      ...state,
      { id: id.next().value, title, summary, display: "none" },
    ]);
    setTitle(""); //reset
    setSummary(""); //reset
  }, [summary, title]);

  const onClickDelete = useCallback((id: number) => {
    setArticles((state) => state.filter((article) => article.id !== id));
  }, []);

  const onClickDisplay = useCallback((id: number) => {
    setArticles((state) =>
      state.map((article) => {
        if (article.id === id) {
          return {
            ...article,
            display: article.display === "none" ? "block" : "none",
          };
        }
        return article;
      })
    );
  }, []);

  return (
    <section>
      <header>
        <h1>Articles</h1>
        <input placeholder="Title..." value={title} onChange={onChangeTitle} />
        <input
          placeholder="Summary..."
          value={summary}
          onChange={onChangeSummary}
        />
        <button onClick={onClickAdd}>Add</button>
      </header>
      <article>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <button onClick={() => onClickDisplay(article.id)}>
                {article.title}
              </button>
              <button onClick={() => onClickDelete(article.id)}>Delete</button>
              <p style={{ display: article.display }}>{article.summary}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Monolith;
