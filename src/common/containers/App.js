import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as AppActions from '../actions/app';

import Home from '../components/Home';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

class App extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    const { layout,bitcoin,receivedWsData } = this.props;
    const { sidebarOpen } = layout;
    const layoutClass = classNames('wrapper',{open : sidebarOpen});

    return (
      <div className={layoutClass}>
        <Sidebar layout={layout} />
  	    <div className="wrap">
          <Header data={bitcoin} />
          <div className="container content">
            {!this.props.children && <Home />}
            {this.props.children}
          </div>
        </div>
        <label className="sidebar-toggle" onClick={this.eventToggleSidebar}></label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bitcoin : state.bitcoin,
    layout : state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
