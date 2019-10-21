import React from 'react';

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
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <p key={idx}>{error}</p>
      ));
    };
    return (
      <React.Fragment>
        <div className="modal-content-errors-container">
          {errors}
        </div>
        <form onSubmit={this.handleSubmit} className="modal-content-form">
          {this.props.formType === 'signup' ? (
            <input
              name='username'
              placeholder='Username'
              type='text'
              required
              onChange={this.update}
              value={this.state.username}
            />
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
            placeholder='password'
            type='password'
            required
            onChange={this.update}
            value={this.state.password}
          />
          {(this.props.formType === 'signup' ? (
            <>
              <input
                name='password2'
                placeholder='Confirm'
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

