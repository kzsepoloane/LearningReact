export const FifteenSecondsComponent = async () => {
    await new Promise(resolve => setTimeout(resolve, 15000)); // Simulate a 10-second delay
  return (
    <div>
      <h1>Ten Seconds Component</h1>
      <p>This component will be rendered for 15 seconds.</p>
    </div>
  );
}