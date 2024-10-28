import Article from "../Models/Article";
import ArticleItem from "./ArticleItem";
interface ArticleListProps {
  articles: Article[];
  onClickRemove: (id: number) => void;
}
function ArticleList({ articles, onClickRemove }: ArticleListProps) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}

export default ArticleList;
export type { ArticleListProps };
