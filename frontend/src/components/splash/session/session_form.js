import React from 'react';
import RenderErrors from '../../../util/render_errors';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    let state = {
      email: "",
      username: "",
      password: "",
      passtword2: ""
    }

    if (props.formType === 'signup') {
      state.passwordConfirmation = "";
    }
    this.state = state;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    this.props.processForm(this.state);
  }

  update(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleGuestLogin(e) {
    this.setState({
      username: "ExampleUser",
      email: "test@test.com",
      password: "testusr1"
    }, () => this.handleSubmit())
  }

  render() {
    return (
      <React.Fragment>
        <RenderErrors />
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.props.formType === 'signup' ? (
            <React.Fragment>
            <p> Username must be between 2 and 30 characters. Choose wisely! Other members of your community will be able to see this.</p>
              <input
                name='username'
                placeholder='Username'
                type='text'
                required
                onChange={this.update}
                value={this.state.username}
              />
            </React.Fragment>
          ) : (
            null
          )}
          <input
            name='email'
            placeholder='E-mail'
            type='text'
            required
            onChange={this.update}
            value={this.state.email}
          />
          <input
            name='password'
            placeholder='Password'
            type='password'
            required
            onChange={this.update}
            value={this.state.password}
          />
          {(this.props.formType === 'signup' ? (
            <>
              <input
                name='password2'
                placeholder='Confirm Password'
                type='password'
                required onChange={ this.update }
                value={ this.state.passwordConfirmation }
              />
              <button type='submit' className="big-button">Create Account</button>
            </>
          ) : (
              <>
                <button type='submit' className="big-button">Sign In</button>
                <span>or sign in with</span>
                <button
                  type="button"
                  onClick={this.handleGuestLogin}
                  className="big-button"
                >
                  Guest Login
              </button>
              </>
            ))}
        </form>
      </React.Fragment>
    );
  }
}

