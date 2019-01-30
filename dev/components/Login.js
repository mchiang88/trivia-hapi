import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userLogin } from '../actions';

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
        <label htmlFor='username'><h3>Username:</h3></label>
        <input 
          onChange={this.handleChange}
          className='name-input'
          type='text' 
          name='username' 
          value={this.state.input} 
          placeholder='input user name...'>
        </input>
        <button onClick={() => this.props.userLogin(this.state.input)}>Log in</button>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userLogin }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);