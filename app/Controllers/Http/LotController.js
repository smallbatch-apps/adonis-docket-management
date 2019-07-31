'use strict'
const Lot = use('App/Models/Lot');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lots
 */
class LotController {
  /**
   * Show a list of all lots.
   * GET lots
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const lots = await auth.user.lots().with('containers').with('containers.type').with('containers.declaration').with('variety').fetch();
    return {lots};
  }

  /**
   * Create/save a new lot.
   * POST lots
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request }) {
    const formData = JSON.parse(request.raw());
    return await Lot.create({...formData.lot, user_id: auth.user.id});
  }

  /**
   * Display a single lot.
   * GET lots/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const lots = await Lot.query()
      .where('id', params.id)
      .where('user_id', auth.user.id)
      .with('containers').fetch();

    return {lot: lots.first()};
  }

  /**
   * Update lot details.
   * PUT or PATCH lots/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const lot = await Lot.findOrFail(params.id);
    lot.fill(request.lot);
    await lot.save();
  }

  /**
   * Delete a lot with id.
   * DELETE lots/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const lot = await Lot.findOrFail(params.id);
    lot.delete();
  }
}

module.exports = LotController
