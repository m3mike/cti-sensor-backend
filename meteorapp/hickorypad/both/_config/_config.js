
Config = {
  name: 'Hickory',
  title: 'Welcome to the Future of Network Security',
  subtitle: 'Use Your Data.  Secure Your World.',
  logo: function() {
    return '<b>' + this.name + '</b>';
  },
  footer: function() {
    return this.name + ' - Copyright ' + new Date().getFullYear();
  },
  emails: {
    from: 'noreply@' + Meteor.absoluteUrl()
  },
  blog: 'http://prairiefire.io',
  about: 'http://prairiefire.io',
  username: false,
  homeRoute: '/',
  dashboardRoute: '/dashboard',
  socialMedia: {
    github: {
      url: 'http://github.com/prairiefiredev',
      icon: 'github'
    },
    info: {
      url: 'http://prairiefire.com',
      icon: 'link'
    }
  },
  publicRoutes: ['home']
};