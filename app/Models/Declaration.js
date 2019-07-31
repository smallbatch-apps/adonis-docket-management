'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Declaration extends Model {

  container () {
    return this.belongsTo('App/Models/Container');
  }
}

module.exports = Declaration
