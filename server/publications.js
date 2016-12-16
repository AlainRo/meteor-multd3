Meteor.publish('charts',function(){
    return Charts.find();
});

if (Charts.find().count() === 0) {
  Charts.insert({
    employee: 'Milton Waddams',
    department: 'IT',
    tpsReports: [{index: 0, date: "2012-01-01", value: 6 },
        {index: 1, date: "2012-02-01", value: 15 },
        {index: 2, date: "2012-03-01", value: 14 },
        {index: 3, date: "2012-04-01", value: 28 },
        {index: 4, date: "2012-05-01", value: 45 }]
  });

  Charts.insert({
    employee: 'Tom Smykowski',
    department: 'IT',
    tpsReports: [{index: 5, date: "2012-01-01", value: 1 },
        {index: 6, date: "2012-02-01", value: 33 },
        {index: 7, date: "2012-03-01", value: 46 },
        {index: 8, date: "2012-04-01", value: 67 },
        {index: 9, date: "2012-05-01", value: 54 }]
  });

  Charts.insert({
    employee: 'Peter Gibbons',
    department: 'IT',
    tpsReports: [{index: 10, date: "2012-01-01", value: 9 },
        {index: 11, date: "2012-02-01", value: 22 },
        {index: 12, date: "2012-03-01", value: 45 },
        {index: 13, date: "2012-04-01", value: 87 },
        {index: 14, date: "2012-05-01", value: 123 }]
  });
  
    Charts.insert({
    employee: 'Samir Nagheenanajar',
    department: 'Sales',
    tpsReports: [{index: 15, date: "2012-05-01", value: 23 },
        {index: 16, date: "2012-04-01", value: 44 },
        {index: 2, date: "2012-03-01", value: 34 },
        {index: 7, date: "2012-02-01", value: 23 },
        {index: 13, date: "2012-01-01", value: 65 }]
  });
}