import React, {Component} from 'react';
import Login from './Login';
import Order from './Order';
import Orders from './YourOrders';
import Dashboard from './Dashboard';
import Summary from './Summary';
import MealDay from './MealDay';
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
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/summary' component={Summary} />
                    <Route path='/mealday' component={MealDay} />
                </Switch>
            </Router>    
        );
    }
}

export default App;
