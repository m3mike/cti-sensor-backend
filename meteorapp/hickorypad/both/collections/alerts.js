// Alert-related collection types

GeoIp = new Meteor.Collection('geoip');

AlertMeta = new Meteor.Collection('alertmeta');

//AlertSource = new Meteor.Collection('alertsource');

Alerts = new Meteor.Collection("alerts");

// Define Schemas

// GeoIP Schema
Schemas.GeoIp = new SimpleSchema({
    country_code3: {
        type: String,
        optional: true
    },
    country_name: {
        type: String,
        optional: true

    },
    timezone: {
        type: String,
        optional: true

    },
    latitude: {
        type: Number,
        optional: true
    },
    longitude: {
        type: Number,
        optional: true
    },
    ip: {
        type: String,
        optional: true
    },
    coordinates: {
        type: [String],
        optional: true
    },
    location: {
        type: [String],
        optional: true
    }
});

// AlertMeta Schema
Schemas.AlertMeta = new SimpleSchema({
    signature_id: {
        type: Number,
        optional: true
    },
    rev: {
        type: Number,
        optional: true
    },
    gid: {
        type: Number,
        optional: true
    },
    signature: {
        type: String,
        optional: true
    },
    severity: {
        type: Number,
        optional: true
    },
    action: {
        type: String,
        optional: true
    }

});

// AlertSource Schema
//Schemas.AlertSource = new SimpleSchema({
// Alerts schema after switch to fluentd from logstash
Schemas.Alerts = new SimpleSchema({
    dest_port: {
        type: String,
        optional: true
    },
    alert_type: {
        type: String,
        optional: true
    },
    timestamp: {
        type: Date,
        optional: true
    },
    host: {
        type: String,
        optional: true
    },
    event_type: {
        type: String,
        optional: true
    },
    src_port: {
        type: Number,
        optional: true
    },
    dest_ip: {
        type: String,
        regEx: SimpleSchema.RegEx.IPv4,
        optional: true
    },
    proto: {
        type: String,
        allowedValues: ['TCP', 'UDP', 'Both'],
        optional: true
    },
    src_ip: {
        type: String,
        regEx: SimpleSchema.RegEx.IPv4,
        optional: true
    },
    alert: {
        type: Schemas.AlertMeta,
        optional: true
    },
    geoip: {
        type: Schemas.GeoIp,
        optional: true
    },
    offset: {
        type: Number,
        optional: true
    },
    _version: {
        type: Number,
        optional: true
    },
    isReported: {
        type: Boolean,
        defaultValue: false
    },
    reportedAt: {
        type: Date,
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

//// Alerts Schema pulling components together
//Schemas.Alerts = new SimpleSchema({
//    _index: {
//        type: String,
//        optional: true
//    },
//    _type: {
//        type: String,
//        optional: true
//    },
//    _score: {
//        type: Number,
//        optional: true
//    },
//    _source: {
//        type: Schemas.AlertSource,
//        optional: true
//    },
//    isReported: {
//        type: Boolean,
//        defaultValue: false
//    },
//    reportedAt: {
//        type: Date,
//        optional: true
//    },
//    createdAt: {
//        type: Date,
//        autoValue: function () {
//            if (this.isInsert) {
//                return new Date();
//            }
//        }
//    },
//    updatedAt: {
//        type: Date,
//        optional: true,
//        autoValue: function () {
//            if (this.isUpdate) {
//                return new Date();
//            }
//        }
//    }
//});

Alerts.attachSchema(Schemas.Alerts);

Alerts.allow({
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
