import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Container,
  Nav, NavItem,
  Dropdown, DropdownItem,
  DropdownToggle, DropdownMenu,
  NavLink
} from 'reactstrap';
import Diets from "./components/Diets";
import Foods from "./components/Foods";
import WorkoutJournal from "./components/WorkoutJournal";
import Workouts from "./components/Workouts";





function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <br />

          <p>
            Getting big, little by little.
        </p>
          <a
            className="App-link"
            href="https://github.com/se-ven/"
            target="_blank"
            rel="noopener noreferrer"
          >
            --Nick Lavery--
        </a>
        </header>
      </div>
    </Container>
  );
}

function Primary(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Router>
      <div>
        <h2 className="App-header">
          Nerd Gainer
      </h2>

<Nav tabs>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Diet Possibilities
    </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Primal</DropdownItem>
              <DropdownItem>Keto</DropdownItem>
              <DropdownItem>Cyclical Keto</DropdownItem>
              <DropdownItem>Vegan</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="/Foods">Food Grid</NavLink>
          </NavItem>

          <Dropdown nav is Open={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Workout Approaches
</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Progressive Overload</DropdownItem>
              <DropdownItem>HIT</DropdownItem>
              <DropdownItem>TSC</DropdownItem>
              <DropdownItem>Negatives</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavItem>
            <NavLink href="/WorkoutJournal">Workout Journal</NavLink>
          </NavItem>

        </Nav>


      </div>




      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/Diets">
          <Diets />
        </Route>
        <Route path="/Foods">
          <Foods />
        </Route>
        <Route path="/WorkoutJournal">
          <WorkoutJournal />
        </Route>
        <Route path="/Workouts">
          <Workouts />
        </Route>
      </Switch>
    </Router>

  );
}

export default {
  App,
  Primary
};
