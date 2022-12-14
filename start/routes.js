'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.post('/login', 'UserController.login');
Route.post('/register', 'UserController.register');

Route.group(() => {
    Route.post('/setredis', 'RedisController.setredis'); //.middleware(['auth']);
    Route.get('/getredis', 'RedisController.getredis');
    Route.post('/setqueue', 'RedisController.setqueue');
    Route.get('/getqueue', 'RedisController.getqueue');
    Route.get('/getallqueue', 'RedisController.getAllQueue');
}).middleware(['auth']);


