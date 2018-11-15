
Meteor.publish('attachments', function() {
  return Attachments.find();
});

Meteor.publish('sensors', function() {
    return Sensors.find();
});

Meteor.publish('rules', function() {
    return Rules.find();
});

Meteor.publish('alerts', function() {
    return Alerts.find({"event_type":"alert"});
});

Meteor.publish('dataSources', function() {
    return DataSources.find();
});

Meteor.publish('jobs', function() {
    return Jobs.find();
});

Meteor.publish('indicatorCount', function() {
  Counts.publish(this, 'indicatorCount', Rules.find());
});

Meteor.publish('alertCount', function() {
  Counts.publish(this, 'alertCount', Alerts.find({"event_type":"alert"}));
});

// Return alert and indicator current count
// TODO: These are not currently reactive in the current state, and require a reload to update.  Use snippet above
// to make alert and indicator counts reactive.  Straightforward change just other stuff to do right now.
Meteor.methods({
  getIndicatorCount: function () {
        return Rules.find().count();
    }
});

Meteor.methods({
    getAlertCount: function() {
        return Alerts.find({"event_type":"alert"}).count();
    }
});