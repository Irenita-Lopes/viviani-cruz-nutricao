import Image from "next/image";
import HomePage from "./screens/HomePage";
import Contact from "./screens/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomePage />
      <Contact />

    </div>
  );
}
