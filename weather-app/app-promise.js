const yargs = require('yargs')
const axios = require('axios')

const keys = require('./config/keys')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
    },
  })
  .help()
  .alias('help', 'h').argv

const encodedAddress = encodeURIComponent(argv.address)
const googleKey = keys.googleKey
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleKey}}`
console.log(googleKey)
axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that addresss.')
    } else if (response.data.status === 'OVER_QUERY_LIMIT') {
      throw new Error('Quota limit reached.')
    }
    console.log(response.data)
    const lat = response.data.results[0].geometry.location.lat
    const lng = response.data.results[0].geometry.location.lng
    const weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`
    console.log(response.data.results[0].formattted_address)
    return axios.get(weatherUrl)
  })
  .then(response => {
    const temperature = response.data.currently.temperature
    const apparentTemperature = response.data.currently.apparentTemperature
    console.log(
      `It's currently ${temperature}. It feels like ${apparentTemperature}.`,
    )
  })
  .catch(e => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API server.')
    } else {
      console.log(e.message)
    }
  })
