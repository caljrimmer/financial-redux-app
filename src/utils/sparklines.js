import d3 from 'd3';
import fc from 'd3fc';
import $ from 'jquery';

class Sparklines {

	constructor(sparkEls) {
		this.sparkEls = sparkEls;
		this.render();
	}

	render() {

        var sparkline = d3.select(this.sparkEls);
        var data = fc.data.random.financial()(50);

        var chart = fc.chart.sparkline()
            .xDomain(fc.util.extent().fields('date')(data))
            .yDomain(fc.util.extent().fields('low')(data))
            .radius(2)
            .yValue(function(d) { return d.low; });

        sparkline
            .append('svg')
            .style({
                height: '15px',
                width: '80px',
                display: 'inline'
            })
            .datum(data)
            .call(chart);

	}

}

export default Sparklines;