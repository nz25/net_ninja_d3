

const data = [
    {width: 200, height: 100, fill: 'purple'},
    {width: 100, height: 60, fill: 'pink'},
    {width: 50, height: 30, fill: 'red'}
]

const svg = d3.select('svg');


// const rects = svg.selectAll('rect')
//     .data(data)
//     .attr('width', function(d,i,n) { return d.width; })
//     .attr('height', function(d) { return d.height; })
//     .attr('fill', function(d) { return d.fill; });

// rects.enter()
//     .append('rect')
//     .attr('width', function(d,i,n) { return d.width; })
//     .attr('height', function(d) { return d.height; })
//     .attr('fill', function(d) { return d.fill; });



d3.json('planets.json').then(data => {

    const circs = svg.selectAll('circle')
        .data(data);

    // add attrs to circs already in DOM
    circs.attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill);

    // append the enter selection to the DOM
    circs.enter()
        .append('circle')
            .attr('cy', 200)
            .attr('cx', d => d.distance)
            .attr('r', d => d.radius)
            .attr('fill', d => d.fill);
});

