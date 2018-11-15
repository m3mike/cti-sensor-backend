Jobs = new Meteor.Collection("jobs");


Schemas.Jobs = new SimpleSchema({
    username: {
        type: String,
        max: 128
    },
    password: {
        type: String,
        max: 128
    },
    feed: {
        type: String,
        max: 255
    },
    server: {
        type: String,
        max: 255
    },
    job_id: {
        type: String,
        max: 255
    },
    status: {
        type: Number
    },
    running: {
        type: Boolean
    },
    source_name: {
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

Jobs.attachSchema(Schemas.Jobs);