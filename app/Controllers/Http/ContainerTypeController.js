'use strict';
const ContainerType = use('App/Models/ContainerType');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with containertypes
 */
class ContainerTypeController {
  /**
   * Show a list of all containertypes.
   * GET containertypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await ContainerType.all();
  }
}

module.exports = ContainerTypeController
