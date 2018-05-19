$(document).ready(function () {

var people =[
  {"name": "Grand parents", "nodeType": "person"},
  {"name": "Parents", "nodeType": "person"},
  {"name": "Joan", "nodeType": "person"},
  {"name": "Kirsten and Graeme", "nodeType": "person"},
  {"name": "Bernie", "nodeType": "person"},

  {"name": "Packaging Size", "nodeType": "issue"},
  {"name": "Option for no packaging", "nodeType": "issue"},
  {"name": "Sellby dates", "nodeType": "issue"},
  {"name": "Would like local shops", "nodeType": "issue"},
  {"name": "Local shops", "nodeType": "issue"},
  {"name": "Large infrequent shop", "nodeType": "issue"},
  {"name": "Large storage", "nodeType": "issue"},
  {"name": "Iregular relation between monney", "nodeType": "issue"},
  {"name": "Difficulty planning", "nodeType": "issue"},
  {"name": "Shopping is a chore", "nodeType": "issue"},
  {"name": "Interested in the reduced section", "nodeType": "issue"},
  {"name": "Social cooking", "nodeType": "issue"},
  {"name": "Wonkey veg", "nodeType": "issue"},
  {"name": "Vegan", "nodeType": "issue"}
];

var links = [
  {"target": "Packaging Size", "source": "Grand parents"},
  {"target": "Option for no packaging", "source": "Grand parents"},
  {"target": "Sellby dates", "source": "Grand parents"},
  {"target": "Local shops", "source": "Grand parents"},

  {"target": "Packaging Size", "source": "Parents"},
  {"target": "Would like local shops", "source": "Parents"},
  {"target": "Large infrequent shop", "source": "Parents"},
  {"target": "Large storage", "source": "Parents"},
  {"target": "Iregular relation between monney", "source": "Parents"},
  {"target": "Difficulty planning", "source": "Parents"},
  {"target": "Shopping is a chore", "source": "Parents"},
  {"target": "Interested in the reduced section", "source": "Parents"},
  {"target": "Wonkey veg", "source": "Parents"},

  {"target": "Packaging Size", "source": "Joan"},
  {"target": "Would like local shops", "source": "Joan"},
  {"target": "Large infrequent shop", "source": "Joan"},
  {"target": "Large storage", "source": "Joan"},
  {"target": "Difficulty planning", "source": "Joan"},
  {"target": "Shopping is a chore", "source": "Joan"},
  {"target": "Wonkey veg", "source": "Joan"},

  {"target": "Packaging Size", "source": "Kirsten and Graeme"},
  {"target": "Would like local shops", "source": "Kirsten and Graeme"},
  {"target": "Large infrequent shop", "source": "Kirsten and Graeme"},
  {"target": "Iregular relation between monney", "source": "Kirsten and Graeme"},
  {"target": "Shopping is a chore", "source": "Kirsten and Graeme"},
  {"target": "Interested in the reduced section", "source": "Kirsten and Graeme"},
  {"target": "Social cooking", "source": "Kirsten and Graeme"},
  {"target": "Wonkey veg", "source": "Kirsten and Graeme"},

  {"target": "Packaging Size", "source": "Bernie"},
  {"target": "Option for no packaging", "source": "Bernie"},
  {"target": "Would like local shops", "source": "Bernie"},
  {"target": "Iregular relation between monney", "source": "Bernie"},
  {"target": "Wonkey veg", "source": "Bernie"},
  {"target": "Vegan", "source": "Bernie"}
];

// DATA ONLY ^^^

d3.selectAll('h1').style("display", "none");

var canvasWidth   = $(window).width() - 20,
    canvasHeight  = $(window).height() -20,

    graphWidth    = 960,
    graphHeight   = 600;

var canvas = d3.select('.root')
            .append('svg')
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "1px solid black");

var graph = canvas.append('g');

var simulation = d3.forceSimulation()
                    .nodes(people);


var manyBodyCustom = d3.forceManyBody().strength(-500);

var linkForce = d3.forceLink(links)
                  .id(function (d) { return d.name });

simulation.force("charge_force", manyBodyCustom)
          .force("center_force", d3.forceCenter(canvasWidth/2, canvasHeight/2))
          .force("links", linkForce);

function assignNodeColor(d) {
  switch(d.nodeType) {
    case "person":
    return "#27ae61"
    break;
    case "issue":
    return "#e84c3d"
    break;
  }
}

var link = canvas.append('g')
                .attr("class", "links")
                .selectAll('line')
                .data(links)
                .enter()
                .append('line')
                .attr("stroke-width", 2);

var node = canvas.append('g')
                .attr("class", "nodes")
                .selectAll('circle')
                .attr("class", "nodes")
                .data(people)
                .enter()
                .append('circle')
                .attr("r", function (d) { return d.nodeType == 'person' ? 15 : 10 })
                .attr("fill", assignNodeColor)
                .on("mouseover", function (d) {
                  var xPos = d3.mouse(this)[0] + 10;
                  var yPos = d3.mouse(this)[1] - 20;
                  toolTip.style("display", null)
                          .attr("transform", "translate(" + xPos + ", " + yPos + ")")
                  toolTipText.text(d.name)
                  toolTipBack.attr("width", function () { return d.name.length * 9 })
                })
                .on("mousemove", function (d) {
                  var xPos = d3.mouse(this)[0] + 10;
                  var yPos = d3.mouse(this)[1] - 20;
                  toolTip.attr("transform", "translate(" + xPos + ", " + yPos + ")")
                })
                .on("mouseout", function() {
                  toolTip.style("display", "none")
                })

var toolTip = canvas.append('g')
                    .style("display", "none")

var toolTipBack = toolTip.append('rect')
                         .attr("width", "100")
                         .attr("height", "18")
                         .attr("fill", "white");

var toolTipText = toolTip.append("text")
                          .text("placeholder")
                          .attr("x", "4")
                          .attr("y", "14")



function tickActions() {
  node.attr("cx", function (d) { return d.x = Math.max(10, Math.min(canvasWidth - 10, d.x)); })
      .attr("cy", function (d) { return d.y = Math.max(10, Math.min(canvasHeight - 10, d.y)); });

  link.attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; })
}

function drag_start(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function drag_drag(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function drag_end(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

var drag_handler = d3.drag()
                      .on("start", drag_start)
                      .on("drag", drag_drag)
                      .on("end", drag_end);

drag_handler(node);

simulation.on("tick", tickActions);




});
