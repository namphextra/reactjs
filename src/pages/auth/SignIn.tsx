import React from 'react';
import { Input, Button } from 'antd';
import APIFactory from '../../api/factory';

const API = APIFactory.get('auth');

interface State {
  account: string
  password: string
}

class SignIn extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };
    this.onClickButton = this.onClickButton.bind(this);
    this.onInputAccount = this.onInputAccount.bind(this);
  }

  async onClickButton() {
    const { account } = this.state;
    const { password } = this.state;
    await API.createCredential(account, password);
  }

  onInputAccount(e: any) {
    this.setState({
      account: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Sign In page</h1>
        <Input type="text" placeholder="Your account" onInput={this.onInputAccount} />
        <Input.Password placeholder="Your password" />
        <Button onClick={this.onClickButton}>Sign In</Button>
      </div>
    );
  }
}

export default SignIn;
