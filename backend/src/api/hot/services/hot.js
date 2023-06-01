'use strict';

/**
 * hot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot.hot');
