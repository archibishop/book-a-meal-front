import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/logOut';

class Navb extends Component{
    resetStore = () => {
        this.props.logout();
    }

    render(){
        return(
            <ul>
                <li><a href="#home">BOOK-A-MEAL</a></li>
                <li><Link to='./dashboard'>Meals</Link></li>
                <li><Link to='./summary'>Summary</Link></li>
                <li><Link to='./mealday'>Meals for the day</Link></li>
                <li className="rightside"><Link to='./login' onClick={this.resetStore}>Sign Out</Link></li>
            </ul>
        );
    }
}

Navb.propTypes = {
    logout: PropTypes.func.isRequired
}

export default Navb;
