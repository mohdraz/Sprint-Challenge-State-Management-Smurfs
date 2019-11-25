import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";

const App = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      {/* api calls */}

      {props.isError && <div>{props.isError}</div>}

      {props.isLoading ? (
        <div>Loading Data....</div>
      ) : (
        props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    isError: state.isError
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
