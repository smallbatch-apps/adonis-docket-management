'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RobbingSchema extends Schema {
  up () {
    this.create('robbings', (table) => {
      table.increments();
      table.string('location');
      table.string('postcode');
      table.integer('container_id').unsigned();
      table.integer('user_id').unsigned();
      table.timestamps();
    })
  }

  down () {
    this.drop('robbings');
  }
}

module.exports = RobbingSchema
