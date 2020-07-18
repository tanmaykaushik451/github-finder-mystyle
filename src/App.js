import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation/Navigation";
import Users from "./Users/components/Users";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import About from "./pages/About";
import User from "./pages/User";
import GithubState from "./mycontext/GithubState"
import AlertState from "./mycontext/alert/AlertState";
import NotFound from "./pages/NotFound";
import "./index.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
    <Router>
    <nav>
      <Navigation/>
    </nav>
    <main>
      <Container className="mt-3 p-0">
          <Switch>
          <Route exact path="/" component={Users}/>
            <Route exact path="/about"component={About}/>
            <Route exact path="/users/:login" component={User}/>
            <Route component={NotFound}/>
          </Switch>
      </Container>
    </main>
    </Router>
    </AlertState>
    </GithubState>
  );
};
export default App;
