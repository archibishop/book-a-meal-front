import React, {Component} from 'react';
import Login from './auth/Login';
import Order from './user/order/Order';
import Orders from './user/orders/YourOrders';
import Dashboard from './caterer/meals/Dashboard';
import Summary from './caterer/orders/Summary';
import MealDay from './caterer/menu/MealDay';
import SignUp from './auth/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch} from 'react-router-dom';
import { PrivateRoute } from '../utils/auth';

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
