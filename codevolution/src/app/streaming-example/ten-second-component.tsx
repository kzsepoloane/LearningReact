export const TenSecondsComponent = async () => {
    await new Promise(resolve => setTimeout(resolve, 10000)); // Simulate a 15-second delay
  return (
    <div>
      <h1>Ten Seconds Component</h1>
      <p>This component will be rendered for 10 seconds.</p>
    </div>
  );
}
