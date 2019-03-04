'use strict';
const request = require('@test-lerna/request')

module.exports = record;

function record() {
    // TODO
    console.log(request() + 1)

}

record()
