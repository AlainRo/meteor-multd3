Template.cards.helpers({
	dirty: function (c) {
		console.log(c);
		return true;},
    charts: function() { 
        return Charts.find(); 
    }
});