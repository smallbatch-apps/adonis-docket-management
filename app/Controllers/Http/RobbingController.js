'use strict';
const Robbing = use('App/Models/Robbing');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with robbings
 */
class RobbingController {
  /**
   * Show a list of all robbings.
   * GET robbings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({auth}) {
    const robbings = await auth.user.robbings().with('container').fetch();
    return {robbings};
  }

  /**
   * Create/save a new robbing.
   * POST robbings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const formData = JSON.parse(request.raw());
    const robbingTemp = await Robbing.create({...formData.robbing, user_id: auth.user.id});

    const robbing = await Robbing.query().where('id', robbingTemp.id).with('container').fetch();
    return {robbing};
  }

  /**
   * Display a single robbing.
   * GET robbings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, auth }) {
    const robbings = await Robbing.query()
      .where('id', params.id)
      .where('user_id', auth.user.id)
      .with('container').fetch();

    return {lot: lots.first()};
  }

  /**
   * Update robbing details.
   * PUT or PATCH robbings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    const formData = JSON.parse(request.raw());
    const robbing = await Robbing.findOrFail(params.id);

    if(robbing.user_id !== auth.user.id) {
      response.status(401).send('Not authorised');
      return;
    }
    robbing.merge({...formData.robbing});
    await robbing.save();

    return {robbing: await Robbing.findOrFail(params.id)};
  }

  /**
   * Delete a robbing with id.
   * DELETE robbings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth }) {
    const robbing = Robbing.findOrFail(params.id);
    if(robbing.user_id !== auth.user.id) {
      response.status(401).send('Not authorised');
      return;
    }
    await robbing.delete();
  }
}

module.exports = RobbingController
