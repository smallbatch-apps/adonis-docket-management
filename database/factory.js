'use strict'
const {format} = require('date-fns')
/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    password: 'test123',
    beekeeper_id: faker.ssn(),
    email: faker.email()
  }
});

Factory.blueprint('App/Models/Lot', (faker) => {
  return {
    user_id: 1
  }
});

Factory.blueprint('App/Models/Container', (faker) => {
  return {
    barcode: faker.string({ pool: '123456790', length: 8 }),
    container_type_id: faker.integer({min: 1, max: 3}),
    user_id: 1,
    docket_id: () => {
      return faker.bool({likelihood: 30}) ? faker.integer({min: 1, max: 5}) : 0
    },
    variety_id: faker.integer({min: 1, max: 169}),
    variety2_id: () => {
      //return faker.integer({min: 1, max: 169});
      return faker.bool({likelihood: 30}) ? faker.integer({min: 1, max: 169}) : 0
    }
  }
});

Factory.blueprint('App/Models/Robbing', (faker) => {
  return {
    location: faker.coordinates(),
    postcode: faker.string({pool: '123456790', length: 4}),
    user_id: 1,

  }
});

Factory.blueprint('App/Models/Docket', (faker) => {
  return {
    carrier: () => {
      return ['DHL', 'Australia Post', 'Fedex'][faker.integer({min: 0, max: 2})];
    },
    freight_paid_by: faker.word(),
    brand_number: faker.google_analytics(),
    pickup_date: format(faker.date({year: 2019}), 'YYYY-MM-DD HH:mm:ss'),
    received_date: () => {
      return faker.bool({likelihood: 30}) ?
        format(faker.date({year: 2019}), 'YYYY-MM-DD HH:mm:ss') :
        null;
    },
    lodgement_date: () => {
      return faker.bool({likelihood: 50}) ?
        format(faker.date({year: 2019}), 'YYYY-MM-DD HH:mm:ss') :
        null;
    },
    user_id: 1
  }
});

Factory.blueprint('App/Models/Variety', (faker) => {
  return {
    variety: faker.word()
  }
});

Factory.blueprint('App/Models/ContainerType', (faker) => {
  return {
    type: faker.word()
  }
});