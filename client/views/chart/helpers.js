Template.chart.helpers({

    render: function() {
    var tmp = Charts.findOne({_id:Template.parentData(0)._id});
    var d = tmp.tpsReports;
    barChartInputX.draw("#chart" +  Template.parentData(0)._id, d);
    }
});