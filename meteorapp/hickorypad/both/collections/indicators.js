Indicators = new Meteor.Collection("indicators");


Schemas.Indicators = new SimpleSchema({
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

Indicators.attachSchema(Schemas.Indicators);