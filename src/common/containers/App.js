import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as AppActions from '../actions/app';

import Home from '../components/Home';
import Header from '../components/layout/Header';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    const { bitcoin } = this.props;

    return (
      <div>
  	    <div className="wrap">
          <Header data={bitcoin} />
          <div className="container content">
            {!this.props.children && <Home bitcoin={bitcoin} />}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bitcoin : state.bitcoin
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
