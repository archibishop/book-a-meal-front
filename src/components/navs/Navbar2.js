import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../css/Order.css';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/logOut';

class Navbar extends Component{
    resetStore = () => {
        this.props.logout();
    }

    render(){
        return(
            <div>
                <ul>
                    <li><a href="#">BOOK-A-MEAL</a></li>
                    <li><Link to={'/order'} >Place an Order</Link></li>
                    <li><Link to={"/orders"}>Your Orders</Link></li>
                    <li className="rightside"><Link to={"/login"} onClick={this.resetStore}>Log Out</Link></li>
                </ul>
            </div>
        );
    }
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired
}

export default Navbar;
