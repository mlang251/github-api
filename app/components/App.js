import React from 'react';
import Form from './Form';
import Display from './Display';
import Profile from './Profile';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            userProfile: undefined
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    getProfile(username) {
        axios.get(`http://api.github.com/users/${username}`)
            .then(response => {
                const data = response.data;
                const userProfile = {
                    name: data.name,
                    login: data.login,
                    avatar_url: data.avatar_url,
                    html_url: data.html_url
                }
                this.setState({userProfile: userProfile});
            })
            .catch(error => {
                console.log(error);
            })
    }

    submitForm(e) {
        e.preventDefault();
        this.getProfile(this.state.value);
        this.setState({value: ''});
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div className = "container">
                <Form value = {this.state.value}
                      handleSubmit = {this.submitForm}
                      handleChange = {this.handleChange} />
                <Display if = {this.state.userProfile}><Profile userProfile = {this.state.userProfile} /></Display>
            </div>
        );
    }
}

export default App;
