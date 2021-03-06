import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            type: ''
        }

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //onChangeUsername(event) {
    //    this.setState({ username: event.target.value });
    //}
    onChangeType(event) {
        this.setState({ type: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        axios.post('http://localhost:4000/users/login', user)
            .then(res => {
                console.log(res)
                const userid = res.data.id
                const type = res.data.type
                console.log(userid)
                console.log(type)
                localStorage.setItem('userid', userid)
                localStorage.setItem('type', type)
                console.log(localStorage.getItem('userid'))
                    //return res.data
                this.props.history.push('/profile')
            })
            .catch(err=>
                {
                    console.log('incorrect:' + err)
                })
        //window.location = '/';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}