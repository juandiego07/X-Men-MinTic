import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Personaje from "./components/Personaje";
import Personajes from "./components/Personajes";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Personajes}></Route>
          <Route exact path="/personajes/:id" component={Personaje}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
