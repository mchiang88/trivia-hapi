import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Lobby from './Lobby';

const Main = (props) => {

  return (
    <div>
      {!props.username 
        ? 
      <Login />
        :
      <Lobby />
      }
    </div>
  )
}


function mapStateToProps(state) {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Main);