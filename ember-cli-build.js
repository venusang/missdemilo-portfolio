"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      enabled: false
    },
    sassOptions: {
      extension: "scss"
    }
  });

  return app.toTree();
};
