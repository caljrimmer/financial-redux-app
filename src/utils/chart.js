import d3 from 'd3';
import fc from 'd3fc';

class Chart {

	constructor(chartEl) {
		this.render(chartEl);
	}

	mapData(data) {
		if(!data) return false;
		this.data.push(parseInt(data[0].price));
		if(this.data.length >= 50){
			this.data.shift();	
		}
	}

	update(data) {
		if(!data) return false;
		this.mapData(data.trades);
	  	this.path
	      .attr("d", this.line)
	      .attr("transform", null)
	      .transition()
	      .duration(0)
	      .ease("linear")
	      .attr("transform", "translate(" + this.x(this.n - this.data.length) + ",0)") 
	}

	render(chartEl) {

		this.n = 40;
		this.data = [320];

		var margin = {top: 20, right: 20, bottom: 20, left: 40},
		    width = 780,
		    height = 200;

		var x = d3.scale.linear()
		    .domain([1, this.n - 1])
		    .range([0, width]);
		this.x = x;

		var y = d3.scale.linear()
		    .domain([290, 370])
		    .range([height, 0]);

		this.line = d3.svg.line()
		    .interpolate("basis")
		    .x(function(d, i) { return x(i); })
		    .y(function(d, i) { return y(d); });

		var svg = d3.select(chartEl).append("svg")
		    .attr("width", width)
		    .attr("height", height + margin.top + margin.bottom)
		  	.append("g")
		    .attr("transform", "translate(" + 20 + "," + margin.top + ")");

		svg.append("defs").append("clipPath")
		    .attr("id", "clip")
		  	.append("rect")
		    .attr("width", width)
		    .attr("height", height);

		svg.append("g")
		    .attr("class", "x axis")
		    .attr("transform", "translate(0," + y(0) + ")")
		    .call(d3.svg.axis().scale(x).orient("bottom"));

		svg.append("g")
		    .attr("class", "y axis")
		    .call(d3.svg.axis().scale(y).tickSize(width).orient("right"));

		svg.selectAll('.axis text')
		    .attr("x", 366)

		this.path = svg.append("g")
		    .attr("clip-path", "url(#clip)")
		  	.append("path")
		    .datum(this.data)
		    .attr("class", "line")
		    .attr("d", this.line);

		this.update();

	}

}

export default Chart;