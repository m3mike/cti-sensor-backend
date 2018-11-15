
Meteor.users.allow({
    update: function (userId, doc, fieldNames, modifier) {
        if (userId === doc._id && !doc.username && fieldNames.length === 1 && fieldNames[0] === 'username') {
            return true;
        } else {
            return false;
        }
    }
});

Sensors.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});

Jobs.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});

