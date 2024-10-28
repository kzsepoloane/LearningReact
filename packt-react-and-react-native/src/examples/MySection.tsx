interface MySectionProps {
  children: JSX.Element | JSX.Element[];
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
