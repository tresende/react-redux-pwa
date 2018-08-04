import React, { Component } from 'react';
import { browserHistory } from 'react-router'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { msg: this.props.location.query.msg };
    }

    envia(event) {
        event.preventDefault();
        // const requestInfo = {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         login: this.login.value,
        //         senha: this.senha.value
        //     }),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // };
        // fetch("http://localhost:8080/api/public/login", requestInfo)
        //     .then(response => {
        //         if (response.ok) {
        //             return response.text();
        //         } else {
        //             throw new Error('Erro ao efetuar login');
        //         }
        //     })
        //     .then(token => {
        //         localStorage.setItem('auth-token', token);
        //         browserHistory.push('/timeline');
        //     }).catch(err => {
        //         this.setState({ msg: err.message });
        //     });
        localStorage.setItem('auth-token', '123456');
        browserHistory.push('/home');
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Login</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.login = input} />
                    <input type="password" ref={(input) => this.senha = input} />
                    <input type="submit" value="login" />
                </form>
            </div>
        );
    }
}