
import Navbar from './navbar.js'; 
import Home from './pages/home.js'; 
import Mealplan from './pages/mealplan.js'; 
import Example from './pages/example.js'; 
import About from './pages/about.js'; 

function App() {
  let component
  switch(window.location.pathname) {
    case "/": 
      component = <Home />
      break
    case "/mealplan": 
    component = <Mealplan />
      break
    case "/tutorial": 
    component = <Example />
      break
    case "/about": 
    component = <About />
      break
    default:
      component = <Home />
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
