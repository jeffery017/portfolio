import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="container">
        <Hero></Hero>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
