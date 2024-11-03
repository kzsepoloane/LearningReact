import { Navigate, Outlet, RouteObject } from "react-router-dom";
import Monolith from "../Monolith";
import ModularMonolith from "../ModularMonolith";
import ArticleList from "../components/ArticleList";
import AddArticle from "../components/AddArticle";

const routes: RouteObject = {
  path: "/ChapterFive",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <Navigate to="/ChapterFive/monolith" />,
    },
    {
      path: "monolith",
      element: <Monolith />,
    },
    {
      path: "modular-monolith",
      element: (
        <ModularMonolith
          addArticle={({
            title,
            summary,
            onChangeTitle,
            onChangeSummary,
            onClickAdd,
          }) => (
            <AddArticle
              name="Articles"
              title={title}
              summary={summary}
              onChangeTitle={onChangeTitle}
              onChangeSummary={onChangeSummary}
              onClickAdd={onClickAdd}
            />
          )}
          articleList={({ articles, onClickRemove }) => (
            <ArticleList articles={articles} onClickRemove={onClickRemove} />
          )}
        />
      ),
    },
  ],
};

export default routes;
