import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import '../css/Login.css'
import { Link } from 'react-router-dom'
import Nav from './Navbar';
import Notifications, { notify } from 'react-notify-toast';


export class Login extends Component {

    componentWillReceiveProps(authData) {
        console.log("out here no where")
        console.log(authData)
        console.log(authData.userData.id)
        if (authData.userData.token) {
            if (authData.userData.role == 'user') {
                localStorage.setItem("x-access-token", authData.userData.token)
                localStorage.setItem("user_id", authData.userData.id)
                console.log("print")
                console.log(localStorage.getItem("user_id"))
                notify.show("Welcome", 'success', 5000);
                this.props.history.push("/order")
            }
            else if (authData.userData.role == 'admin') {
                localStorage.setItem("x-access-token", authData.userData.token)
                localStorage.setItem("user_id", authData.userData.id)
                console.log("print")
                console.log(localStorage.getItem("user_id"))
                notify.show("Welcome", 'success', 5000);
                this.props.history.push("/dashboard")
            }   
        }
        else {
            console.log("Am here and i dont have a token")
            console.log(authData.userData.message)
            notify.show(authData.userData.message, 'warning', 5000);
        }
    }

    isEmpty = (str) => {
        return (!str || 0 === str.length);
    }

    componentWillMount() {
        console.log(this.props)
    }

    handleLogin = (e) => {
        e.preventDefault();
        if (this.isEmpty(e.target.elements.password.value)){
            notify.show("Password field cannot be empty", 'warning', 5000);
        }
        else {
        let auth = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        console.log(JSON.stringify(auth))
        this.props.login(JSON.stringify(auth))
        }
    }


    render() {
        return (<div>
            <div className="Login">
                <Nav />
                <Notifications />

                <br />


                <h1>SIGN IN</h1>

                <div className="form">
                    <form action="./OrderPage.html" onSubmit={this.handleLogin}>
                        <label name="email"><strong>Email</strong></label>
                        <input type="email" id="email" name="email" placeholder="Your email.." />

                        <label name="password"><strong>Password</strong></label>
                        <input type="password" id="password" name="password" placeholder="Password.." />


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
