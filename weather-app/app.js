const request = require('request')

const address = '14%20old%20county%20glen%20dublin'
const key = 'AIzaSyCfOifHw7VLrDU5L-wjOqxOwUgvjAHoHL8'

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`,
    json: true,
  },
  (error, request, body) => {
    // if (error) {
    //   console.log(error)
    // }

    console.log(body)
  },
)
