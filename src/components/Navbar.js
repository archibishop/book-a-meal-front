import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import '../css/SignUp.css';
import { BrowserRouter as Router } from 'react-router-dom';


class Nav extends Component {
    render(){
        return(
            <div>
                <Router>
                <ul>
                        <li><a href="#home">BOOK-A-MEAL</a></li>
                        <li className="rightside"><Link to={"/signup"} className="active">Register</Link></li>
                        <li className="rightside"><Link to={"/login"}>Login</Link></li>
                </ul>
                </Router>
            </div>
        );
    }
}
export default Nav
