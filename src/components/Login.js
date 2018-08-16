import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import '../css/Login.css'
import { Link } from 'react-router-dom'
import Nav from './Navbar';


export class Login extends Component {

    componentWillReceiveProps(authData) {
        console.log("out here no where")
        console.log(authData)
        if (authData) {
            if (authData.userData.role == 'user') {
                localStorage.setItem("x-access-token", authData.userData.token)
                this.props.history.push("/order")
            }
            else if (authData.userData.role == 'admin') {
                localStorage.setItem("x-access-token", authData.userData.token)
                this.props.history.push("/dashboard")
            }
            
        }
    }

    componentWillMount() {
        console.log(this.props)
    }

    handleLogin = (e) => {
        e.preventDefault();
        let auth = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        console.log(JSON.stringify(auth))
        this.props.login(JSON.stringify(auth))
    }


    render() {
        return (<div>
            <div className="Login">
                <Nav />

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
