import React from 'react';
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import SpinnerComponent from "../components/spinner.component";
import {connect} from "react-redux";
import {connectAllegro} from "../actions/authenticate.action";
import {onComponentDidMount} from "react-redux-lifecycle";

let AuthContainer = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <Redirect to='/search'/>
  }

  return (
    <Container>
      <h2>Connecting with Allegro API</h2>
      <SpinnerComponent inProgress={true}/>
    </Container>
  )
};

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated,
  isRequestInProgress: state.ui.isRequestInProgress,
});

const mapDispatchToProps = {
  connectAllegro,
};

AuthContainer = connect(mapStateToProps, mapDispatchToProps)(onComponentDidMount(connectAllegro)(AuthContainer));
export default AuthContainer;