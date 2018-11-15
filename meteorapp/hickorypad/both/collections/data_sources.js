DataSources = new Meteor.Collection("dataSources");


Schemas.DataSources = new SimpleSchema({
    name: {
        type: String,
        max: 128
    },
    host: {
        type: String,
        max: 255,
        optional: true
    },
    url: {
        type: String,
        max: 512
    },
    feed: {
        type: String,
        max: 512
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    enabled: {
        type: Boolean,
        defaultValue: true,
        optional: true
    },
    status: {
        type: Number,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true,
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

DataSources.attachSchema(Schemas.DataSources);

DataSources.allow({
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

