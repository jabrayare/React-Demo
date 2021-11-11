import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testing for changes, test commit</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 73d3c3b24068c4f487107a81196cb82b31b29e05
  );
}

export default App;
