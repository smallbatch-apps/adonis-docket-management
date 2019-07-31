'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContainerTypeSchema extends Schema {
  up () {
    this.create('container_types', (table) => {
      table.increments();
      table.string('type');
    })
  }

  down () {
    this.drop('container_types');
  }
}

module.exports = ContainerTypeSchema
