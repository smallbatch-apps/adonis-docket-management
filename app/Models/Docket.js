'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Docket extends Model {

  static castDates (field, value) {
    if (['created_at', 'updated_at', 'pickup_date', 'received_date', 'lodgement_date'].indexOf(field) > -1) {
        return value.format('YYYY-MM-DD h:mm:ss')
    }
    return super.formatDates(field, value)
  }

  static get dates () {
    return super.dates.concat(['pickup_date', 'received_date', 'lodgement_date'])
  }

  user () {
    return this.belongsTo('App/Models/User');
  }

  containers () {
    return this.hasMany('App/Models/Container');
  }
}

module.exports = Docket
