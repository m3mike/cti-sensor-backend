
var AdminConfig;

AdminConfig = {
  name: Config.name,
  collections: {
  },
  dashboard: {
    homeUrl: '/dashboard'
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  }
};

if (Meteor.isClient) {
  window.AdminConfig = AdminConfig;
} else if (Meteor.isServer) {
  global.AdminConfig = AdminConfig;
}