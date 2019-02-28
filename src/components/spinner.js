import React from "react";
import connect from "react-redux/es/connect/connect";

let Spinner = ({isRequestInProgress}) => {
  return (
    isRequestInProgress &&
      <div className='spinner-container'>
        <div></div>
      </div>
  )
};

const mapStateToProps = (state) => ({
  isRequestInProgress: state.ui.isRequestInProgress
});

Spinner = connect(mapStateToProps)(Spinner);

export default Spinner;