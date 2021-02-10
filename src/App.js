import "./App.css";
import Details from "./details";
import Main from "./main";
import Nav from "./nav";
import Shop from "./shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App px-3 py-2">
        <Main />
        <Nav />
        <Switch>
          <Route path="/" exact component={Details} />
          <Route path="/about" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
