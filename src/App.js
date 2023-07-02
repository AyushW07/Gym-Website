import "./App.css";
import Footer from "./Components/organism/Footer/Footer";
import Navbar from "./Components/organism/Navbar/Navbar";
import About from "./Components/pages/About/About";
import Home from "./Components/pages/Home/Home";
import Pricing from "./Components/pages/Pricing/Pricing";
import Program from "./Components/pages/Program/Program";
import Trainer from "./Components/pages/Trainer/Trainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Program />
      <Trainer />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
