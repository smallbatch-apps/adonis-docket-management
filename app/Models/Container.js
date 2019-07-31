'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Container extends Model {

  lot() {
    return this.belongsTo('App/Models/Lot');
  }

  type() {
    return this.belongsTo('App/Models/ContainerType');
  }

  declaration() {
    return this.belongsTo('App/Models/Declaration');
  }

  variety() {
    return this.belongsTo('App/Models/Variety');
  }

  variety2() {
    return this.belongsTo('App/Models/Variety', 'variety2_id');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  docket() {
    return this.belongsTo('App/Models/Docket');
  }

}

module.exports = Container
