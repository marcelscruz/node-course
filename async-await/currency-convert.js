const axios = require('axios')

const getExchangeRate = async (from, to) => {
  // const key = <KEY_HERE>

  try {
    const response = await axios.get(
      `http://data.fixer.io/api/latest?access_key=${key}`,
    )
    const euro = 1 / response.data.rates[from]
    const rate = euro * response.data.rates[to]

    if (isNaN(rate)) {
      throw new Error()
    }

    return rate
  } catch (e) {
    throw new Error(`Unable to get exchange rate for ${from} and ${to}.`)
  }
}

const getCountries = async currencyCode => {
  try {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/currency/${currencyCode}`,
    )
    return response.data.map(country => country.name)
  } catch (error) {
    throw new Error(`Unable to get countries that use ${currencyCode}.`)
  }
}

const convertCurrency = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to)
  const convertedAmount = (amount * rate).toFixed(2)
  const countries = await getCountries(to)

  return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries.join(
    ', ',
  )}.`
}

convertCurrency('USD', 'BRL', 20)
  .then(message => {
    console.log(message)
  })
  .catch(e => {
    console.log(e.message)
  })

// const add = async (a, b) => a + b

// const doWork = async () => {
//   try {
//     const result = await add(12, 13)
//     return result
//   } catch (e) {
//     return 'Something went wrong! 🐑  💨'
//   }
// }

// doWork()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(e => {
//     console.log('Something went wrong')
//     console.log(e.message)
//   })
