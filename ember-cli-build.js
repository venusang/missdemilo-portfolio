'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapCSS': true
    }
  });

  app.import("vendor/js/popper.min.js");
  app.import("vendor/js/plugins.js");
  app.import("vendor/js/main.js");

  return app.toTree();
};
