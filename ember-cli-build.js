'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      // enabled: false,
      prepend: 'https://missdemilo.netlify.com/'
    }
  });

  return app.toTree();
};
