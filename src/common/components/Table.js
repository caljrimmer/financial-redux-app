import React, { Component } from 'react';

class Table extends Component {

	constructor(props){
		super(props);
	}

  	render() {

  		const data = this.props.data;

  		const MessageRows = data.trades.map(function(d){
            return (
                <li className="collection-item avatar">

                	{d.side === 'buy' && d.type !== 'done' &&
						<i className="material-icons circle">call_made</i>
					}
					
					{d.side === 'sell' && d.type !== 'done' &&
						<i className="material-icons circle">call_received</i>
					}
                	
                	{d.side === 'buy' && d.type === 'done' &&
						<i className="material-icons circle green">call_made</i>
					}
					
					{d.side === 'sell' && d.type === 'done' &&
						<i className="material-icons circle red">call_received</i>
					}

					<span className="title">${d.price}</span>
					<p>	{d.type} <br/>
						<span className="small">{d.order_id}</span>
					</p>

					{d.type === 'done' &&
						<a href="#!" className="secondary-content"><i className="material-icons">offline_pin</i></a>
					}


					{d.type === 'open' &&
						<a href="#!" className="secondary-content"><i className="material-icons">toll</i></a>
					}
					
					{d.type === 'received' &&
						<a href="#!" className="secondary-content"><i className="material-icons">input</i></a>
					}

			    </li>
            )
        });


	    return (
	    	<div className="col s12 m6">
	      	  <ul className="collection">
			    {MessageRows}
			  </ul>
			</div>
	    );
  	}
}

export default Table;