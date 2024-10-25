const handleClick = () => {
  console.log("I was clicked!");
};

const Events = () => {
  return (
    <section>
      <h1>My Events</h1>
      <button onClick={handleClick}>Click Me</button>
    </section>
  );
};

export default Events;
