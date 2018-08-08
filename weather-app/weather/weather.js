const request = require('request')

const keys = require('../config/keys')

const getWeather = (lat, lng, callback) => {
  const weatherKey = keys.weatherKey

  request(
    {
      url: `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`,
      json: true,
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
        })
      } else {
        callback('Unable to fetch weather.')
      }
    },
  )
}

module.exports.getWeather = getWeather
