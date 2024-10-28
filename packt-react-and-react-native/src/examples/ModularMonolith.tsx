import { ChangeEvent, useCallback, useState } from "react";
import Article from "./Models/Article";
import { ArticleListProps } from "./components/ArticleList";
import { AddArticleProps } from "./components/AddArticle";

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
interface ModularMonolithProps {
  addArticle: (props: AddArticleProps) => JSX.Element;
  articleList: (props: ArticleListProps) => JSX.Element;
}
const Monolith = ({ addArticle, articleList }: ModularMonolithProps) => {
  const [articles, setArticles] = useState<Article[]>(Articles);
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  const onChangeTitle = (event: ChangeEvent) => {
    setTitle((event.target as HTMLInputElement).value);
  };

  const onChangeSummary = (event: ChangeEvent) => {
    setSummary((event.target as HTMLInputElement).value);
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

  return (
    <section>
      <header>Articles</header>
      {addArticle({
        name: "Add Article",
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd,
      })}
      {articleList({
        articles,
        onClickRemove: onClickDelete,
      })}
    </section>
  );
};

export default Monolith;
