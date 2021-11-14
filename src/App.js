import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Logo /> */}
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
