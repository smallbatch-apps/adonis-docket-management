'use strict'
const Docket = use('App/Models/Docket');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with dockets
 */
class DocketController {
  /**
   * Show a list of all dockets.
   * GET dockets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, auth }) {
    const dockets = await auth.user.dockets().with('containers').fetch();
    return {dockets};
  }

  /**
   * Create/save a new docket.
   * POST dockets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const formData = JSON.parse(request.raw());
    const docket = await Docket.create({...formData.docket, user_id: auth.user.id});
    return {docket};
  }

  /**
   * Display a single docket.
   * GET dockets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const docket = await Docket.findOrFail(params.id);
    if(docket.user_id !== auth.user.id){
      response.status(401).send('Not authorised');
    }
    return {docket};
  }

  /**
   * Update docket details.
   * PUT or PATCH dockets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const docket = await Docket.findOrFail(params.id);
    user.fill(request.docket);
    await user.save();
  }

  /**
   * Delete a docket with id.
   * DELETE dockets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const docket = await Docket.findOrFail(params.id);
    await docket.delete();
  }
}

module.exports = DocketController
