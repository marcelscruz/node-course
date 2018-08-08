const request = require('request')

const geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address)

    request(
      {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}}`,
        json: true,
      },
      (error, response, body) => {
        if (error) {
          reject('Unable to connect to Google servers.')
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Unable to find that address.')
        } else if (body.status === 'OVER_QUERY_LIMIT') {
          reject('Quota limit reached')
        } else if (body.status === 'OK') {
          resolve(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng,
          })
        }
      },
    )
  })
}

geocodeAddress('19146')
  .then(res => {
    console.log(JSON.stringify(res, undefined, 2))
  })
  .catch(error => {
    console.log(error)
  })
