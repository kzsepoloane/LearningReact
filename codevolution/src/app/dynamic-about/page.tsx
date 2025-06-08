import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us Page",
};
const About = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");  
  console.log("Theme from cookies:", theme?.value);
  return (
    <main>
      <h1>About Us &#x40; {new Date().toLocaleTimeString()}</h1>
    </main>
  );
};

export default About;
