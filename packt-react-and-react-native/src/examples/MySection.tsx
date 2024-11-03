import { ReactNode } from "react";

interface MySectionProps {
  children: ReactNode;
}

function MySection(props: MySectionProps) {
  return (
    <section>
      <h1>My Section</h1>
      {props.children}
    </section>
  );
}

export default MySection;
