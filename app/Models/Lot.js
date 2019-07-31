'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lot extends Model {
  containers() {
    return this.hasMany('App/Models/Container');
  }

}

module.exports = Lot
