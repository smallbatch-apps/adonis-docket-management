'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DocketSchema extends Schema {
  up () {
    this.create('dockets', (table) => {
      table.increments();
      table.integer('user_id').unsigned();
      table.string('carrier');
      table.string('freight_paid_by');
      table.string('brand_number');
      table.dateTime('pickup_date');
      table.dateTime('received_date');
      table.dateTime('lodgement_date');
      table.timestamps();
    })
  }

  down () {
    this.drop('dockets');
  }
}

module.exports = DocketSchema
