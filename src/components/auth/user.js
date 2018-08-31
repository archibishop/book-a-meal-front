import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../actions/signUp';

class User extends Component {
    
    constructor(props){
        super(props);
    }

    componentWillMount(){
    }

    componentWillReceiveProps(data){
    }

    handleSignUp = (e) => {
        e.preventDefault();
        let data = {
            "business_name": "",
            "location": "",
            "fname": e.target.fname.value,
            "lname": e.target.lname.value,
            "password": e.target.password.value,
            "email": e.target.email.value,
            "role_id": 2,
        }
        this.props.signup(JSON.stringify(data))
    }

    isEmpty = (str) => {
        return (!str || 0 === str.length);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
                <h1>USERS SIGN UP</h1>
                <div class="form1x">
                    <form onSubmit={this.handleSignUp}>
                        <label for="fname"><strong>First Name</strong></label>
                        <input type="text" id="fname" name="fname" placeholder="First Name" minlength="5" required />

                        <label for="lname"><strong>Last Name</strong></label>
                        <input type="text" id="lname" name="lname" placeholder="Last Name" minlength="5" required />

                        <label for="email"><strong>Email</strong></label>
                        <input type="email" id="email" name="email" placeholder="Your email.." />

                        <label for="password"><strong>Password</strong></label>
                        <input type="password" id="password" name="password" placeholder="Password" minlength="5" required />

                        <label for="cnfmpassword"><strong>Confirm</strong></label>
                        <input type="password" id="cnfmpassword" name="cnfmpassword" placeholder="Confirm Password" minlength="5" required />

                        <input type="submit" value="Register" />
                    </form>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    signup: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
}) 

export default connect(null, { signup })(User)
