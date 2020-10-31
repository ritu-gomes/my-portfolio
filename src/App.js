import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blogs from './Components/Blogs/Blogs';
import Navbar from './Components/Home/Navbar/Navbar';
import Footer from './Components/Home/Footer/Footer';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;
