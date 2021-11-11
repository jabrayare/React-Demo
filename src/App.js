import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
