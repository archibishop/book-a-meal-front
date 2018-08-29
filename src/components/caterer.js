import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../actions/signUp';
import Nav from './Navbar';

class Caterer extends Component {

    handleSignUp = (e) => {
        e.preventDefault();
        console.log(e.target.bname.value);
        let data = {
            "business_name": e.target.bname.value,
            "fname": e.target.fname.value,
            "lname": e.target.lname.value,
            "password": e.target.password.value,
            "email": e.target.email.value,
            "location": e.target.location.value,
            "role_id": 1,
        }
        console.log("You have clicked sign up caterer");
        this.props.signup(JSON.stringify(data))
    }

    render() {
        if (this.props.show) {
            return null;
        }

        return (
            <div>
                <h1>CATERER SIGN UP</h1>

                <div class="form1">
                    <form onSubmit={this.handleSignUp}>
                        <label for="bname"><strong>Business Name</strong></label>
                        <input type="text" id="bname" name="bname" placeholder="Business Name" minlength="5" required/>

                        <label for="location"><strong>Location</strong></label>
                        <input type="text" id="location" name="location" placeholder="Location" minlength="5" required/>

                        <label for="fname"><strong>First Name</strong></label>
                        <input type="text" id="fname" name="fname" placeholder="First Name" minlength="5" required/>

                        <label for="lname"><strong>Last Name</strong></label>
                        <input type="text" id="lname" name="lname" placeholder="Last Name" minlength="5" required/>

                        <label for="email"><strong>Email</strong></label>
                        <input type="email" id="email" name="email" placeholder="Your email.." />

                        <label for="password"><strong>Password</strong></label>
                        <input type="password" id="password" name="password" placeholder="Password" minlength="5" required />

                        <label for="cnfmpassword"><strong>Confirm Password</strong></label>
                        <input type="password" id="cnfmpassword" name="cnfmpassword" placeholder="Password" minlength="5" required/>

                        <input type="submit" value="Register" />
                    </form>
                </div>
            </div>
        );
    }
}

Caterer.propTypes = {
    signup: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
}) 

export default connect(null, { signup })(Caterer)
