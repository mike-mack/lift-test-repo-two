      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([[ 'ID', 'Effort', 'Change Proneness', 'Priority', 'Method Count'], ['AttributeHandlerJavaEleven.java',2,4,2,77],['AttributeHandler.java',2,3,1,77],['AttributeHandlerAndSorter.java',1,1,0,54],['AttributeHandler2.java',2,2,0,78]]);

      var options = {
        title: 'Priority Ranking for Refactoring God Classes - ' +
               'Fix Higher Priority Classes First',
        height: 900,         width: 1200,         explorer: {},         hAxis: {title: 'Effort'},
        vAxis: {title: 'Change Proneness'},
        colorAxis: {colors: ['blue', 'green']},
        bubble: {textStyle: {fontSize: 11}}      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }
