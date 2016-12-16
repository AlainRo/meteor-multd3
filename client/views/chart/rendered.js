Template.chart.onRendered(function(){
    var tmp = Charts.findOne({_id:Template.parentData(0)._id});
    var d = tmp.tpsReports;
    barChartInputX.draw("#chart" +  Template.parentData(0)._id, d);

});


Template.chart.events({
	'click .chart': function () {
		console.log('click');
		var tmp = Charts.findOne({_id:Template.parentData(0)._id});
		Charts.update({_id: tmp._id}, {$set: {tpsReports: d}});
	}

});
