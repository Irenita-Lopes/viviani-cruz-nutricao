import HomePage from "./screens/HomePage";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Services from "./screens/Services";
import Products from "./screens/Products";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomePage />

      <About />

      <Services />

      <Products />

      <Contact />

    </div>
  );
}
