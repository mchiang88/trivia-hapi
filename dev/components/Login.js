import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <form>
        <label htmlFor='username'>Username:</label>
        <input 
          onChange={this.handleChange}
          className='name-input'
          type='text' 
          name='username' 
          value={this.state.input} 
          placeholder='input user name...'>
        </input>
      </form>
    )
  }
}

export default Login;