import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import '../../css/Login.css'
import { Link } from 'react-router-dom'
import Nav from '../navs/Navbar';
import Notifications, { notify } from 'react-notify-toast';


class Login extends Component {

    componentWillReceiveProps(authData) {
        if (authData.userData.token) {
            if (authData.userData.role == 'user') {
                localStorage.setItem("x-access-token", authData.userData.token)
                localStorage.setItem("user_id", authData.userData.id)
                // notify.show("Welcome", 'success', 5000);
                this.props.history.push("/order")
            }
            else if (authData.userData.role == 'admin') {
                localStorage.setItem("x-access-token", authData.userData.token)
                localStorage.setItem("user_id", authData.userData.id)
                // notify.show("Welcome", 'success', 5000);
                this.props.history.push("/dashboard")
            }   
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        let auth = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        this.props.login(JSON.stringify(auth))
        
    }


    render() {
        return (<div>
            <div className="Login">
                <Nav />
                <Notifications />

                <br />


                <h1>SIGN IN</h1>

                <div className="formx">
                    <form action="./OrderPage.html" onSubmit={this.handleLogin}>
                        <label name="email"><strong>Email</strong></label>
                        <input type="email" id="email" name="email" placeholder="Your email.." />

                        <label name="password"><strong>Password</strong></label>
                        <input type="password" id="password" name="password" placeholder="Password.." minLength="5" required />


                        <input id="login-submit" type="submit" readOnly="Submit" />
                    </form>
                </div>
            </div>
        </div>);
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    userData: state.user.message
})

export default connect(mapStateToProps, { login })(Login);
