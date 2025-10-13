import Navbar from "./components/Navbar";
import './App.css';
import { Hero } from "./components/Hero";
import { About } from "./components/about";
function App() {
  return (
   <div className="min-h-screeen">
     <Navbar />
    <Hero />
    <About />
   </div>
  );
}

export default App;
