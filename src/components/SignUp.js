import React, { Component }  from 'react';
import Nav from './Navbar';
import User from './user';
import Caterer from './caterer';
import Notifications, { notify } from 'react-notify-toast';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            showUser: true
        }
    }

    handleSelect = (e) => {
        // e.preventDefault();
        console.log(e.target.value);
        if (e.target.value === 'user'){
            this.setState({
                showUser: true
            });
            console.log("handle select user")
        } else if (e.target.value === 'caterer'){
            this.setState({
                showUser: false
            });
            console.log("handle select admin")
        }
    }

    render(){
        return(
            <div>
                <Nav />
                <Notifications />
                <form className="select-signup" onClick={this.handleSelect}>
                    <input type="radio" name="gender" value="user" /> User
                    <input type="radio" name="gender" value="caterer" /> Caterer
                </form>


                <User show={this.state.showUser}/>
                <Caterer show={this.state.showUser}/>

            </div>
        );
    }
}

export default SignUp
