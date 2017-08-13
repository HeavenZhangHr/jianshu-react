import React, { Component } from 'react';
import Panel from '../../compontent/user/Panel.js';
import SignIn from '../../compontent/user/signin/SignIn';


class SignInPanel extends Component {
  render() {

    return (
      <Panel >
        <SignIn />
      </Panel>
    );
  }
}

export default SignInPanel