import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';

const Main = (props) => {

  return (
    <div>
      {!props.username && <Login />}
    </div>
  )
}


function mapStateToProps(state) {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Main);