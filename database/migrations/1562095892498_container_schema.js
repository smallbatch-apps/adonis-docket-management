'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContainerSchema extends Schema {

  up () {
    this.create('containers', (table) => {
      table.increments();
      table.string('barcode');
      table.integer('lot_id').unsigned();
      table.integer('docket_id').unsigned();
      table.integer('variety_id').unsigned();
      table.integer('variety2_id').unsigned();
      table.integer('user_id').unsigned();
      table.integer('container_type_id').unsigned();
      table.timestamps();
    })
  }

  down () {
    this.drop('containers');
  }
}

module.exports = ContainerSchema
