'use strict';

module.exports = {
    version: '1.0.0',
    init: pluginContext => {
        let policy = require('./policies/sample-policy');
        pluginContext.registerPolicy(policy);
    }
};