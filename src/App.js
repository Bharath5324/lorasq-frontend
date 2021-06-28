import NavBar from './components/Navbar/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from './components/Landing/Landing';
import Admin from './components/Admin/Admin';
import React, {Fragment} from 'react';
function App() {
  return (
    <Fragment>
    <NavBar/>
    <Router>
        <Switch>
            <Route to="/">
                <Landing/>
            </Route>
            <Route to="/admin">
                <Admin/>
            </Route>
        </Switch>
    </Router>
    
</Fragment>

  );
}

export default App;
