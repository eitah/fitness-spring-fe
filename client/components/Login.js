/* eslint-disable max-len, arrow-body-style, no-underscore-dangle, react/no-string-refs, no-undef, no-console */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }

  create(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const body = { username, password };
    // const headers = { headers: 'application/json' };
//     console.log('Heaers to be sent:', headers);
    console.log('Body to be sent:', body);

    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('http://localhost:9001/api/authenticate', body)
    .then((res) => {
      console.log('Got response.  Response was:', res);
      localStorage.clear();
      localStorage.setItem('token', res.headers.authorization);
      browserHistory.push('/');
    })
    .catch((err) => {
      console.log('Error was:', err);
    });
  }

  render() {
    return (
      <div>

        <h1>Login</h1>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input ref="username" type="text" className="form-control" id="username" defaultValue="user3" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input ref="password" type="password" className="form-control" id="password" defaultValue="123" />
              </div>

              <button onClick={this.create} type="submit" className="btn btn-default">Create</button>
            </form>
          </div>
          <div className="col-xs-9" />
        </div>

      </div>
    );
  }
}
