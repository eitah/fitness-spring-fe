/* eslint-disable max-len, arrow-body-style, no-underscore-dangle, react/no-string-refs, no-undef, no-console */

import React from 'react';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.logout();
  }

  logout() {
    console.log('Clearing Local Storage');
    localStorage.clear();
    setTimeout(() => browserHistory.push('/'), 1000);
  }

  render() {
    return (
      <div>
        <h1>You have been logged out jerk!</h1>
      </div>
    );
  }
}
