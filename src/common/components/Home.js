import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions/app';

import News from './News';
import Table from './Table';
import HeartBeat from './HeartBeat';
import Chart from './Chart';

import ws from '../../utils/websockets';

class Home extends Component {

  constructor(props) {
	   super(props);
     ws(this.props);
  }

  render() {	

    const { bitcoin,receivedWsData } = this.props;

    return (
      <div className="row">

        <div className="row">
          <HeartBeat data={bitcoin} />
        </div>
        
        <div className="row">
            <News />
            <Table data={bitcoin} receivedWsData={receivedWsData} />
        </div>

        <div className="row">
            <Chart />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);