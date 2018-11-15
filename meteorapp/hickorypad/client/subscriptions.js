
Meteor.subscribe('indicatorCount');
Meteor.subscribe('sensors');
Meteor.subscribe('rules');
Meteor.subscribe('alerts');
Meteor.subscribe('dataSources');
Meteor.subscribe('jobs');

Meteor.subscribe('indicatorCount');
Meteor.subscribe('alertCount');
Counts.get('indicatorCount');
Counts.get('alertCount');
