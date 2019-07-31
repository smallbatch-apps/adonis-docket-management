'use strict'
const User = use('App/Models/User');

class AuthController {

  async logIn({ request, auth }) {
    const body = JSON.parse(request.raw());
    const token = await auth.attempt(body.user.beekeeper_id, body.user.password);
    return {token};
  }

}

module.exports = AuthController
