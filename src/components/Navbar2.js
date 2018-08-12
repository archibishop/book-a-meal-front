import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/Order.css';

class Navbar extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><a href="#">BOOK-A-MEAL</a></li>
                    <li><Link to={'/order'} className="active">Place an Order</Link></li>
                    <li><Link to={"/orders"}>Your Orders</Link></li>
                    <li className="rightside"><Link to={"/login"}>Log Out</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
