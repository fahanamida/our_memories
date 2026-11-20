import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Memories from "./components/Memories";
import LoveLetter from "./components/LoveLetter";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Story />
        <Memories />
        <LoveLetter />
        
      </main>
    </>
  );
}

export default App;