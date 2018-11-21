import React, { Component } from "react";
import { connect } from 'react-redux';
//import * as actionCreators from "../../store/actions/actions";
import * as LoginAction from "../../store/actions/actionsLogin";

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    onEmailInput = (e) => {
        this.setState({email: e.target.value})
    }
    onPasswordINput = (e) => {
        this.setState({password: e.target.value})
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onRegister(this.state.email, this.state.password)
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmitHandler}>
                    <input type='text' placeholder='email' onChange = {this.onEmailInput}/>
                    <input type = 'password' placeholder = 'password' onChange = {this.onPasswordINput}/>
                    <button>Submit</button>
                </form> 
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (email, pass) => dispatch(LoginAction.login(email, pass))
    }
}

export default connect(null, mapDispatchToProps)(Login);