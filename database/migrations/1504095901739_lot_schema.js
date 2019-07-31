'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LotSchema extends Schema {
  up () {
    this.create('lots', (table) => {
      table.increments();
      table.integer('user_id').unsigned();
      table.timestamps();
    });
  }

  down () {
    this.drop('lots')
  }
}

module.exports = LotSchema
