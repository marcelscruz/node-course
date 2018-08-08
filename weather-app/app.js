const request = require('request')

const address = '14%20old%20county%20glen%20dublin'
const key = 'AIzaSyB-tt9YkG6ydI-zlR5pGLMLvTkbhzaYldE'

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}}`,
    // url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`,
    json: true,
  },
  (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
  },
)
