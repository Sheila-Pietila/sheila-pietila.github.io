
import Navbar from './navbar.js'; 
import Home from './pages/home.js'; 
import Mealplan from './pages/mealplan.js'; 
import Example from './pages/example.js'; 
import About from './pages/about.js'; 
import { Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <>
      <Navbar />
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mealplan" element={<Mealplan />} />
          <Route path="/example" element={<Example />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
