import React, {Component} from 'react';
import Login from './Login';
import Order from './Order';
import Orders from './YourOrders';
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
                    <Route path='/orders' component={Orders} />
                </Switch>
            </Router>    
        );
    }
}

export default App;
