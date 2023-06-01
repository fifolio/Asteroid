'use strict';

/**
 * hot controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hot.hot');
