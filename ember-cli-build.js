'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      enabled: true,
      generateAssetMap: true,
      fingerprintAssetMap: true,
      // extensions: ['js', 'css', 'png', 'jpg', 'gif'],
      // replaceExtensions: ['html', 'js', 'css'],
      prepend: 'https://missdemilo.netlify.com/'
    }
  });

  return app.toTree();
};
