import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import  Button  from '@material-ui/core/Button';
import NavBar from './Navbar/NavBar';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from './Landing/Landing';
import Admin from './Admin/Admin';
class App extends Component {
    render () {
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

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))