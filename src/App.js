import "./App.css";
import Navbar from "./Components/organism/Navbar/Navbar";
import About from "./Components/pages/About/About";
import Home from "./Components/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
