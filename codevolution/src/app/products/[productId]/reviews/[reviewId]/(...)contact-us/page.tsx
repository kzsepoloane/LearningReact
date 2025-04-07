import React from "react";

export default function ContactUs() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const companies = [
    {
      name: "Codevolution",
      email: "info@codevolution.com",
      phone: "123-456-7890",
      address: "123 Main Street, Anytown, USA 12345",
    },
    {
      name: "Codevolution 2",
      email: "info2@codevolution.com",
      phone: "098-765-4321",
      address: "456 Elm Street, Anytown, USA 67890",
    },
  ];

  const [company] = React.useState(
    companies[Math.floor(Math.random() * companies.length)]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `Thanks for contacting us, ${name}! We'll get back to you at ${email}.`
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact Us Regarding Reviews </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="block w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="block w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <p>
          {company.name}
          <br />
          {company.email}
          <br />
          {company.phone}
          <br />
          {company.address}
        </p>
      </div>
    </div>
  );
}
