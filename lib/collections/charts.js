Charts = new Mongo.Collection('charts');
Charts.allow({
	insert: () => false,
	update: () => true,
	remove: () => false
});
Charts.before.update(function (userid, doc, fieldNames, modifier, options) {
	console.log('update', doc, fieldNames);
})