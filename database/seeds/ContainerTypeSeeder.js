'use strict'

/*
|--------------------------------------------------------------------------
| ContainerTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
const ContainerType = use('App/Models/ContainerType')

class ContainerTypeSeeder {
  async run () {
    await ContainerType.create({type: 'IBC'});
    await ContainerType.create({type: 'Drum'});
    await ContainerType.create({type: 'Block'});

    //await Factory.model('App/Models/ContainerType').create(5);


  }
}

module.exports = ContainerTypeSeeder
