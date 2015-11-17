import d3 from 'd3';
import fc from 'd3fc';

class Chart {

	constructor(chartEl) {
		this.render(chartEl);
	}

	mapData(data) {

	}

	render(chartEl) {

		const width = 780;
		const height = 300;

		const dataGenerator = fc.data.random.financial()
		    .startDate(new Date(2014, 1, 1))
		    .filter(function() { return true; });

		const data = dataGenerator(70);

		const container = d3.select(chartEl)
		    .insert('svg', 'div')
		    .attr('width', width)
		    .attr('height', height);

		// Create scale for x axis
		const xScale = fc.scale.dateTime()
		    .domain(fc.util.extent().fields('date')(data))
		    .range([0, width]);

		// Create scale for y axis
		const yScale = d3.scale.linear()
		    .domain(fc.util.extent().fields(['high', 'low'])(data))
		    .range([height, 0])
		    .nice();

		const crosshair = fc.tool.crosshair();
		const crosshairData = [];

		const candlestick = fc.series.candlestick()
		    .xScale(xScale)
		    .yScale(yScale);

		const multi = fc.series.multi()
		  .series([candlestick, crosshair])
		  .xScale(xScale)
		  .yScale(yScale)
		  .mapping(function(series) {
		      switch (series) {
		          case candlestick:
		              return data;
		          case crosshair:
		              return crosshairData;
		      }
		  });

		container.append('g')
		    .datum(data)
		    .call(multi);

		const lineAnnotation = fc.annotation.line()
		    .xScale(xScale)
		    .yScale(yScale);

		const priceMarkers = [
			  Math.floor(d3.min(data, function(d) { return d.high; })),
			  Math.ceil(d3.max(data, function(d) { return d.low; }))
		]

		container.append('g')
			.datum(priceMarkers)
			.call(lineAnnotation);

	}

}

export default Chart;