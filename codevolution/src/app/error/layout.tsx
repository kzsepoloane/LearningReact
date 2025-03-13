export default function ErrorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //throw new Error("This is a deliberate error for testing purposes.");
  return (
    <>
      <h1>Testing how error handling works here</h1>
      {children}
    </>
  );
}
