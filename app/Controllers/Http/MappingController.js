'use strict'
const Env = use('Env');
const axios = require('axios');

class MappingController {

  async address({ params, request, auth, response }) {
    const apiKey = Env.get('GOOGLE_API_KEY');
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${request.input('latlong')}&key=${apiKey}`;
    const {data} = await axios(apiUrl);
    const address = data.results[0];
    const {long_name:postcode} = address.address_components.find(comp => {
      return comp.types.includes('postal_code');
    });
    return {
      address: address.formatted_address,
      postcode
    }
  }

}

module.exports = MappingController
