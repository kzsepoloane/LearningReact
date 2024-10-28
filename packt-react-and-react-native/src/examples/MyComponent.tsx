interface MyComponentProps {
  title: string;
  description: string;
}
function MyComponent({ title, description }: MyComponentProps) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export default MyComponent;
