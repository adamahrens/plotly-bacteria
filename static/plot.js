d3.json("static/data.json").then((incomingData) => {
  console.log('Got json ' + JSON.stringify(incomingData));
  createBarPlot(incomingData);
  createBubblePlot(incomingData);
});


function createBarPlot(data) {
  console.log('bar plot created');

  // Create your trace.
  var trace = {
    x: [20, 56, 100],
    y: ['OTU 1167', 'OTU 2859', 'OTU 482'],
    type: "bar",
    orientation: 'h'
  };

  // Create the data array for our plot
  var data = [trace];

  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", data);
}

function createBubblePlot(data) {
  console.log('bubble plot created');

  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
    }
  };

  var data = [trace1];

  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };

  Plotly.newPlot('bubble-plot', data, layout);
}

$(document).ready(function(){
  console.log('document ready')

  $("#test-subject-dropdown").change(function () {
       var subject = this.value;
       if (subject !== '-1') {
         console.log('Test subject selected ' + subject);
       }
   });
})
