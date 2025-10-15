import Navbar from "./components/Navbar";
import './App.css';
import { Hero } from "./components/Hero";
import { About } from "./components/about";
import { Erudits } from "./components/Erudits";
import { Citation } from "./components/citation";
function App() {
  return (
   <div className="min-h-screeen">
     <Navbar />
    <Hero />
    <About />
   <Erudits />
    <Citation />   
   </div>
  );
}

export default App;
