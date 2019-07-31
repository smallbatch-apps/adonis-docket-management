'use strict';
const Container = use('App/Models/Container');
const Declaration = use('App/Models/Declaration');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with containers
 */
class ContainerController {
  /**
   * Show a list of all containers.
   * GET containers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({auth}) {
    const containers = await auth.user.containers().with('variety').with('variety2').with('type').fetch();
    return {containers: containers.rows.map(container => {
      const jsonContainer = container.toJSON();
      const {id, barcode, container_type_id, docket_id, variety_id, variety2_id, user, type: {type}, variety: {variety}, created_at} = jsonContainer;
      const variety2 = jsonContainer.variety2 ? jsonContainer.variety2.variety : null;
      return { id, barcode, container_type_id, docket_id, variety_id, variety2_id, user, variety, variety2, type, created_at};
    })};
  }

  /**
   * Create/save a new container.
   * POST containers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const formData = JSON.parse(request.raw());
    const declarationData = formData.container.declaration;
    delete formData.container.declaration;
    const container = await Container.create(formData.container);
    await Declaration.create({...declarationData, container_id: +container.id});
    return await Container.query().where('id', container.id).with('type').with('declaration').fetch();
  }

  /**
   * Display a single container.
   * GET containers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, auth, response }) {
    const container = ((await Container.query().where('id', params.id).where('user_id', auth.user.id).with('type').with('declaration').with('variety').with('variety2').fetch()).toJSON())[0];
    if(!container) {
      response.status(404).send('Container not found');
      return;
    }
    const {id, barcode, docket, docket_id, user, type: {type}, variety: {variety}, variety2: {variety:variety2}} = container;

    return {
      container: {
        id, barcode, docket, docket_id, user, type, variety, variety2
      }
    };
  }

  /**
   * Update container details.
   * PUT or PATCH containers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    const container = await Container.findOrFail(params.id);

    if(container.user_id !== auth.user.id){
      response.status(401).send('Not authorised');
    }

    const formData = JSON.parse(request.raw());
    container.merge({...formData.container});
    await container.save();
    return {container};
    //const returnContainer = ((await Container.query().where('id', params.id).where('user_id', auth.user.id).with('type').with('declaration').with('variety').fetch()).toJSON())[0];
    // const {id, barcode, docket, user, type: {type}, variety: {variety}} = returnContainer;
    // return {
    //   container: {
    //     id, barcode, docket, user, type, variety
    //   }
    // };
  }

  /**
   * Delete a container with id.
   * DELETE containers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, auth }) {
    const container = await Container.fineOrFail(params.id);
    if(container.user_id === auth.user_id) {
      await container.delete();
      response.status(200).send('Container deleted');
    }
    response.status(401).send('Not authorised');
  }
}

module.exports = ContainerController
