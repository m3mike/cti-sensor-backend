Sensors = new Meteor.Collection("sensors");


Schemas.Sensors = new SimpleSchema({
    name: {
        type: String,
        max: 128
    },
    host: {
        type: String,
        max: 255
    },
    enabled: {
        type: Boolean
    },
    status: {
        type: Number
    },
    notes: {
        type: String,
        max: 4096,
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        }
    }
});

Sensors.attachSchema(Schemas.Sensors);

Sensors.allow({
    insert: function () {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        return doc.userId === userId;
    },
    remove: function () {
        return true;
    }
});