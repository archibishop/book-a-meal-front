import React, {Component} from 'react';
import Login from './Login';
import Order from './Order';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/login' component={Login}/>
                    <Route path='/order' component={Order} />
                </Switch>
            </Router>    
        );
    }
}

export default App;
