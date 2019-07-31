'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VarietySchema extends Schema {
  up () {
    this.create('varieties', (table) => {
      table.increments();
      table.string('variety');
      table.string('variety_short');
    })
  }

  down () {
    this.drop('varieties');
  }
}

module.exports = VarietySchema
