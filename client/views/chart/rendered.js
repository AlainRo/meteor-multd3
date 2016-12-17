Template.chart.onCreated(function () {
	var self = this;
  self.autorun(function () {
    self.subscribe('charts', Template.currentData()._id);
  });
});

Template.chart.onRendered(function(){
    var tmp = Charts.findOne({_id:Template.parentData(0)._id});
    var d = tmp.tpsReports;
    barChartInputX.draw("#chart" +  Template.parentData(0)._id, d);

});


Template.chart.events({
	'mouseup .chart': function () {
		console.log('click');
		console.log(Template.instance().firstNode);
		var tmp = Charts.findOne({_id:Template.parentData(0)._id});
		Charts.update({_id: tmp._id}, {$set: {tpsReports: 
		[{index: 15, date: "2012-05-01", value: 20 },
        {index: 16, date: "2012-04-01", value: 20 },
        {index: 2, date: "2012-03-01", value: 20 },
        {index: 7, date: "2012-02-01", value: 20 },
        {index: 13, date: "2012-01-01", value: 20 }]
		}});
	}

});
