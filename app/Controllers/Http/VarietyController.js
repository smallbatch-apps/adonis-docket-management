'use strict'
const Variety = use('App/Models/Variety');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class VarietyController {
  async index () {
    const varieties = await Variety.all();
    return {varieties};
  }
}

module.exports = VarietyController
