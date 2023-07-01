import "./App.css";
import Navbar from "./Components/organism/Navbar/Navbar";
import About from "./Components/pages/About/About";
import Home from "./Components/pages/Home/Home";
import Program from "./Components/pages/Program/Program";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Program />
    </div>
  );
}

export default App;
