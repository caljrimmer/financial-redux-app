import React, { Component } from 'react';
import HeartBeatD3 from '../../utils/heartbeat';

class HeartBeat extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount () {
  		this.chart = new HeartBeatD3(this.refs.chart.getDOMNode());
  }

  componentWillReceiveProps (nextProps) {
      this.chart.update(nextProps.data);
  }

  render() {
    return (
        <div className="col s12 m12">
          <div ref="chart" className="chart"></div>
        </div>
  
    );
  }
}

export default HeartBeat;