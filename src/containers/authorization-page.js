import React from 'react';
import {Redirect} from "react-router-dom";
import Spinner from "../components/spinner";
import {connect} from "react-redux";
import {connectAllegro} from "../actions/authenticate.action";
import {onComponentDidMount} from "react-redux-lifecycle";

let AuthorizationPage = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <Redirect to='/search'/>
  }

  return (
    <div className='auth-container'>
      <h2>Connecting with Allegro API</h2>
      <Spinner inProgress={true}/>
    </div>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated,
  isRequestInProgress: state.ui.isRequestInProgress,
});

const mapDispatchToProps = {
  connectAllegro,
};

AuthorizationPage = connect(mapStateToProps, mapDispatchToProps)(onComponentDidMount(connectAllegro)(AuthorizationPage));
export default AuthorizationPage;