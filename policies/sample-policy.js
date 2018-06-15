'use strict';

module.exports = {
    name: 'sample',
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/sample-policy.json',
        type: 'object',
        properties: {},
    },
    policy: actionParams => {
        return (req, res, next) => {
            next();
        };
    }
};