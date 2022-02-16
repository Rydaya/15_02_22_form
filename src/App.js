import React, { Component } from "react";

function EmptyField({ text }) {
  return <p>{text}</p>
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      errorText: '',
    }
  }

  changeLogin = (e) => {
    this.setState({ login: e.target.value });
  }

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  processingData = () => {
    if (this.state.login === '' || this.state.password === '') {
      this.setState({ errorText: 'Not all fields are filled' });
    } else {
      console.log(`Login: ${this.state.login}, password: ${this.state.password}`);
      this.setState({ login: '' });
      this.setState({ password: '' });
      this.setState({ errorText: '' });
    }
  }

  render() {
    return (
      <>
        <form action="#">
          <label>Login</label>
          <div>
            <input type='text' value={this.state.login} onChange={this.changeLogin} />
          </div>
          <label>Password</label>
          <div>
            <input type='password' value={this.state.password} onChange={this.changePassword} />
          </div>
          <EmptyField text={this.state.errorText} />
          <button type="submit" onClick={this.processingData}>Submit</button>
        </form>
      </>
    )
  }
}


export default App;
