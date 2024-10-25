import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MySection from "./chapter2_examples/MySection.tsx";
import MyButton from "./chapter2_examples/MyButton.tsx";
import BuiltInTags from "./chapter2_examples/BuiltInTags.tsx";
import Hello from "./chapter2_examples/Hello.tsx";
import Layout from "./chapter2_examples/Layout.tsx";
import MyComponent from "./chapter2_examples/MyComponent.tsx";
import Expressions from "./chapter2_examples/Expressions.tsx";
import Events from "./chapter2_examples/Events.tsx";
import ObjectArrayMappings from "./chapter2_examples/ObjectArrayMappings.tsx";

const root_element = document.getElementById("root");

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(root_element!).render(
  <StrictMode>
    <>
      <Hello />
      <BuiltInTags />
      <Layout />
      <MyComponent />
      <MySection>
        <MyButton>My Button Text</MyButton>
      </MySection>
      <Expressions />
      <Events />
      <ObjectArrayMappings />
    </>
  </StrictMode>
);
