import React from "react";
import Article from "../models/Article";

type ArticleItemProps = {
  article: Article;
  onClickRemove: (id: number) => void;
};
function ArticleItem({ article, onClickRemove }: ArticleItemProps) {
  const [isOpened, setIsOpened] = React.useState(article.display !== "none");

  const onClickToggle = React.useCallback(() => {
    setIsOpened((state) => !state);
  }, []);

  return (
    <li>
      <a href={`#${article.id}`} title="Toggle Summary" onClick={onClickToggle}>
        {article.title}
      </a>
      &nbsp;
      <a
        href={`#${article.id}`}
        title="Remove"
        onClick={() => onClickRemove(article.id)}
      >
        &#10007;
      </a>
      <p style={{ display: isOpened ? "block" : "none" }}>{article.summary}</p>
    </li>
  );
}

export default ArticleItem;
export type { ArticleItemProps };
