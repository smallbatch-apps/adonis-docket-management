'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('api/auth/attempt', 'AuthController.logIn');
});

Route.group(() => {
  Route.get('varieties', 'VarietyController.index');
  Route.get('address', 'MappingController.address');
  Route.resource('users', 'UserController').apiOnly();
  Route.resource('containers', 'ContainerController').apiOnly();
  Route.resource('dockets', 'DocketController').apiOnly();
  Route.resource('robbings', 'RobbingController').apiOnly();
  Route.resource('lots', 'LotController').apiOnly();
}).middleware(['auth']).prefix('api');

