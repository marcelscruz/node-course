const request = require('request')
const keys = require('../config/keys')

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address)
  const googleKey = keys.googleKey

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleKey}`,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to connect to Google servers.')
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address.')
      } else if (body.status === 'OVER_QUERY_LIMIT') {
        callback('Quota limit reached')
      } else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        })
      }
    },
  )
}

module.exports.geocodeAddress = geocodeAddress
