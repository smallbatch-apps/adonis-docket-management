'use strict'

/*
|--------------------------------------------------------------------------
| ContainerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ContainerSeeder {
  async run () {
    await Factory.model('App/Models/Container').createMany(6);
  }
}

module.exports = ContainerSeeder
