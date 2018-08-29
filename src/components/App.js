import React, {Component} from 'react';
import Login from './Login';
import Order from './Order';
import Orders from './YourOrders';
import Dashboard from './Dashboard';
import Summary from './Summary';
import MealDay from './MealDay';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch} from 'react-router-dom';
import { PrivateRoute } from './auth/auth';

class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={SignUp} />
                    <Route path='/order' component={Order} />
                    <Route path='/orders' component={Orders} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <Route path='/summary' component={Summary} />
                    <Route path='/mealday' component={MealDay} />
                </Switch>
            </Router>    
        );
    }
}

export default App;
