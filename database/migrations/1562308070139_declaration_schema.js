'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeclarationSchema extends Schema {
  up () {
    this.create('declarations', (table) => {
      table.increments();
      table.integer('container_id').unsigned();
      table.boolean('qa_conditions');
      table.boolean('efb_evidence');
      table.boolean('afb_evidence');
      table.boolean('otc_treatment');
      table.string('otc_treatment_type');
      table.integer('otc_treatment_number');
      table.boolean('chemical_exposure');
      table.string('chemical_exposure_detail');
      table.boolean('gmo_exposure');
      table.string('gmo_exposure_detail');
      table.boolean('medical_grade_exposure');
      table.string('medical_grade_exposure_detail');
      table.boolean('supplemental_feeding');
      table.string('supplemental_feeding_detail');
      table.timestamps();
    })
  }

  down () {
    this.drop('declarations');
  }
}

module.exports = DeclarationSchema
