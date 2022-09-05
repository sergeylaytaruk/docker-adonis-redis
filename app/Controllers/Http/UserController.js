'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */

const UserModel = use('App/Models/User')

class UserController {
  /**
   * Performs a user login and returns a JWT
   * POST /ogin
   *
   * @param {request}
   * @param {response}
   * @param {auth}
   */
  async login({ request, response, auth }) {
    const { email, password } = request.all()
    const authenticate = await auth.attempt(email, password)
    response.send(authenticate)
  }

  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const users = await UserModel.all()
    response.send(users)
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async register({ request, response }) {
    const data = request.all()
    const user = await UserModel.create(data)
    response.send(user)
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const id = params.id
    const data = await request.all()
    const user = await UserModel.find(id)
    await user.merge(data)
    await user.save()
    response.send(user)
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const id = params.id
    const user = await UserModel.find(id)
    await user.delete()
    response.send({ Message: 'successfully destroyed' })
  }
}

module.exports = UserController
