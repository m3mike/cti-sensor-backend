Rules = new Meteor.Collection("rules");


Schemas.Rules = new SimpleSchema({
    dataSource: {
        type: String,
        max: 128
    },
    header: {
        type: String,
        max: 255
    },
    indicator: {
        type: String,
        max: 255
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

Rules.attachSchema(Schemas.Rules);

Rules.allow({
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