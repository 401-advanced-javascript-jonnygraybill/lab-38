import React from 'react';
import { LoginContext } from './context.js';
import superagent from 'superagent';

const API = process.env.REACT_APP_API;

const If = props => {
  return !!props.condition ? props.children : null;
};

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    superagent
      .post(`${API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        let token = response.text;
        this.context.login(token);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </If>

        <If condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <input type="submit" value="Login" />
          </form>
        </If>
      </>
    );
  }
}

export default Login;
