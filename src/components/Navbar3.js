import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navb extends Component{
    render(){
        return(
            <ul>
                <li><a href="#home">BOOK-A-MEAL</a></li>
                <li><Link to='./dashboard' className="active">Meals</Link></li>
                <li><Link to='./summary'>Summary</Link></li>
                <li><Link to='./mealday'>Meals for the day</Link></li>
                <li className="rightside"><Link to='./login' >Sign Out</Link></li>
            </ul>
        );
    }
}

export default Navb;
