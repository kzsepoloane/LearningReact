import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us Page",
};
const About = () => {
  return (
    <main>
      <h1>About Us &#x40 {new Date().toLocaleTimeString()}</h1>
    </main>
  );
};

export default About;
