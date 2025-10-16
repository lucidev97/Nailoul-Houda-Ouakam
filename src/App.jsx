import Navbar from "./components/Navbar";
import './App.css';
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Erudits } from "./components/Erudits";
import { Citation } from "./components/Citation";
import {Contact} from "./components/Contact";
import Footer from "./components/Footer";
import { Events } from "./components/Events";
function App() {
  return (
    <div className="min-h-screeen">
      <Navbar />
      <Hero />
      <About />
      <Erudits />
      <Citation />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
