import React, { Component, PropTypes } from 'react';

class Header extends Component {

	constructor (props) {
		super(props);
		this.startTime = (new Date().getTime()/1000)
	}

  render() {
  	const messages = this.props.data.count;
  	const rate = () => {
  		if(messages === 0) return 0;
  		return (messages/((new Date().getTime()/1000) - this.startTime)).toFixed(2)	
  	}
    return (
      	<div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Financial App</a>
			    <small>built with React and Redux</small>
			    <div className="chip">
				    <i className="large material-icons">settings_input_antenna</i>
				    {messages} ({rate()} mps)
				</div>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;