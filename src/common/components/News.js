import React, { Component } from 'react';
import SparklinesD3 from '../../utils/sparklines';
import $ from 'jquery';

class News extends Component {

  componentDidMount () {
  	$('.sparklines').each(function(){
  		new SparklinesD3($(this)[0]);
  	});
  }

  render() {
    return (
        <div className="col s12 m6">
          <div className="card teal darken-1">
            <div className="card-content">
              <span className="card-title"><b>News</b></span>
              <p>Bitcoin rose <b>4.96</b> cents, or <b>0.8%</b>, to <b>324.94</b> <span className="sparklines"></span>. Elsewhere in Europe, The Euro index was up <b>1.1%</b> <span className="sparklines"></span>, while in the UK, the index climbed <b>3.56%</b> <span className="sparklines"></span>. On the currency markets, the euro fell <b>0.3%</b> against the dollar to <b>$1.1111</b> <span className="sparklines"></span>. The pound rose <b>0.2%</b> against the euro to <b>€1.4138</b>  and was flat against the dollar at <b>$1.5711</b> <span className="sparklines"></span>.
              </p>
            </div>
            <div className="card-action">
              <a href="#">Find Out More</a>
            </div>
          </div>
        </div>
  
    );
  }
}

export default News;