/**
 * Created by Administrator on 2016/4/29.
 */
"use strict";
var width = 800;
var height = 800;
var img_w = 77;
var img_h = 90;
var showingText = false;

var svg = d3.select(".col-md-8").append("svg")
    .attr("width", width)
    .attr("height", height);

var root = json;

var force = d3.layout.force()
    .nodes(root.nodes)
    .links(root.edges)
    .size([width, height])
    .linkDistance(550)
    .gravity(0.15)
    .charge(-5500)
    .start();

var edges_line = svg.selectAll("line")
    .data(root.edges)
    .enter()
    .append("line")
    .style("stroke", "#ccc")
    .style("stroke-width", 1);

var edges_text = svg.selectAll(".linetext")
    .data(root.edges)
    .enter()
    .append("text")
    .attr("class", "linetext")
    .text(function (d) {
        return d.relation;
    });

var nodes_img = svg.selectAll("image")
    .data(root.nodes)
    .enter()
    .append("image")
    .attr("width", img_w)
    .attr("height", img_h)
    .attr("xlink:href", function (d) {
        return d.Image;
    })
    .on("mouseover", function (d, i) {
        //显示连接线上的文字
        edges_text.style("fill-opacity", function (edge) {
            if (edge.source === d || edge.target === d) {
                return 1.0;
            }
        });
    })
    /* .on('click', function (d) {
        d3.select(".modal-title").html(d.Name);

        d3.select("#collapseOne .panel-body").html(d.Description);

        d3.select("#collapseTwo .panel-body").html(d.Importance);

        //d3.select("#collapseThree .panel-body").html(d.);

        $('#modal').modal({
            keyboard: false
        });
     })*/
    .on("mouseout", function (d, i) {
        //隐去连接线上的文字
        edges_text.style("fill-opacity", function (edge) {
            if (edge.source === d || edge.target === d) {
                return 0.0;
            }
        });
    })
    .call(force.drag)
    .on('dblclick', connectedNodes); //Added code

var text_dx = -20;
var text_dy = 20;

var nodes_text = svg.selectAll(".nodetext")
    .data(root.nodes)
    .enter()
    .append("text")
    .attr("class", "nodetext")
    .attr("dx", text_dx)
    .attr("dy", text_dy)
    .text(function (d) {
        return d.Name;
    });


force.on("tick", function () {

    //限制结点的边界
    root.nodes.forEach(function (d, i) {
        d.x = d.x - img_w / 2 < 0 ? img_w / 2 : d.x;
        d.x = d.x + img_w / 2 > width ? width - img_w / 2 : d.x;
        d.y = d.y - img_h / 2 < 0 ? img_h / 2 : d.y;
        d.y = d.y + img_h / 2 + text_dy > height ? height - img_h / 2 - text_dy : d.y;
    });

    //更新连接线的位置
    edges_line.attr("x1", function (d) {
        return d.source.x;
    });
    edges_line.attr("y1", function (d) {
        return d.source.y;
    });
    edges_line.attr("x2", function (d) {
        return d.target.x;
    });
    edges_line.attr("y2", function (d) {
        return d.target.y;
    });

    //更新连接线上文字的位置
    edges_text.attr("x", function (d) {
        return (d.source.x + d.target.x) / 2;
    });
    edges_text.attr("y", function (d) {
        return (d.source.y + d.target.y) / 2;
    });


    //更新结点图片和文字
    nodes_img.attr("x", function (d) {
        return d.x - img_w / 2;
    });
    nodes_img.attr("y", function (d) {
        return d.y - img_h / 2;
    });

    nodes_text.attr("x", function (d) {
        return d.x
    });
    nodes_text.attr("y", function (d) {
        return d.y + img_w / 2;
    });
});
//Toggle stores whether the highlighting is on
var toggle = 0;

//Create an array logging what is connected to what
var linkedByIndex = {};
for (var i = 0; i < root.nodes.length; i++) {
    linkedByIndex[i + "," + i] = 1;
}
root.edges.forEach(function (d) {
    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});

//This function looks up whether a pair are neighbours
function neighboring(a, b) {
    return linkedByIndex[a.index + "," + b.index];
}

function connectedNodes() {
    if (toggle == 0) {
        //Reduce the opacity of all but the neighbouring nodes
        var d = d3.select(this).node().__data__;
        nodes_img.style("opacity", function (o) {
            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
        });

        edges_line.style("opacity", function (o) {
            return d.index == o.source.index | d.index == o.target.index ? 1 : 0.1;
        });

        //Reduce the op

        toggle = 1;
    } else {
        //Put them back to opacity=1
        nodes_img.style("opacity", 1);
        edges_line.style("opacity", 1);
        toggle = 0;
    }

}

//---End Insert---
