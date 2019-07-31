'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Robbing extends Model {

  container() {
    return this.belongsTo('App/Models/Container');
  }

  user () {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Robbing
