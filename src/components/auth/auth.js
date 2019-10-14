import React from 'react';
import jwt from 'jsonwebtoken';
import { LoginContext } from './context';

const If = props => {
  return !!props.condition ? props.children : null;
};

class Auth extends React.Component {
  static contextType = LoginContext;
  render() {
    let okToRender = false;

    try {
      let user = this.context.token
        ? jwt.verify(this.context.token, process.env.REACT_APP_SECRET)
        : {};

      okToRender =
        this.context.loggedIn &&
        (this.props.capability
          ? user.capabilities.includes(this.props.capability)
          : true);
    } catch (e) {
      console.error(e);
    }

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    );
  }
}

export default Auth;
