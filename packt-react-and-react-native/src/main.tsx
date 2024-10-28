import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MySection from "./examples/MySection.tsx";
import MyButton from "./examples/MyButton.tsx";
import BuiltInTags from "./examples/BuiltInTags.tsx";
import Hello from "./examples/Hello.tsx";
import Layout from "./examples/Layout.tsx";
import MyComponent from "./examples/MyComponent.tsx";
import Expressions from "./examples/Expressions.tsx";
import Events from "./examples/Events.tsx";
import ObjectArrayMappings from "./examples/ObjectArrayMappings.tsx";
import MyList from "./examples/MyList.tsx";
import TimerApp from "./examples/TimerApp.tsx";
import StateApp from "./examples/StateManagement.tsx";
import Hooks from "./examples/Hooks.tsx";
import Monolith from "./examples/Monolith.tsx";
import ModularMonolith from "./examples/ModularMonolith.tsx";
import AddArticle from "./examples/components/AddArticle.tsx";
import ArticleList from "./examples/components/ArticleList.tsx";

const root_element = document.getElementById("root");
const appState: {
  text: string;
  disabled: boolean;
  items: string[];
  name: string;
  age: number;
} = {
  text: "My Button",
  disabled: false,
  items: ["First", "Second", "Third"],
  name: "Karabo",
  age: 33,
};
createRoot(root_element!).render(
  <StrictMode>
    <>
      <Hello />
      <BuiltInTags />
      <Layout />
      <MyComponent
        title="Welcome to My App"
        description="This is a description"
      />
      <MySection>
        <MyButton disabled={appState.disabled} text={appState.text} />
      </MySection>
      <Expressions />
      <Events />
      <ObjectArrayMappings />
      <MyList items={appState.items} />
      <StateApp name={appState.name} age={appState.age} />
      <TimerApp />
      <Hooks />
      <Monolith />
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
    </>
  </StrictMode>
);
