import { ChangeEvent } from "react";

type AddArticleProps = {
  name: string;
  title: string;
  summary: string;
  onChangeTitle: (event: ChangeEvent) => void;
  onChangeSummary: (event: ChangeEvent) => void;
  onClickAdd: () => void;
};
const AddArticle = ({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}: AddArticleProps) => {
  return (
    <section>
      <h1>{name}</h1>
      <input placeholder="Title" value={title} onChange={onChangeTitle} />
      <input placeholder="Summary" value={summary} onChange={onChangeSummary} />
      <button onClick={onClickAdd}>Add</button>
    </section>
  );
};
export default AddArticle;
export type { AddArticleProps };
