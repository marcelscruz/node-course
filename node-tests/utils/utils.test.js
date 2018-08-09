const expect = require('expect')

const utils = require('./utils')

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(33, 11)

      expect(res)
        .toBe(44)
        .toBeA('number')
    })

    // done as argument tells mocha the test is async, so should wait to check
    it('should async add two numbers', done => {
      utils.asyncAdd(4, 3, sum => {
        expect(sum)
          .toBe(7)
          .toBeA('number')
        done() // mocha processes after this call
      })
    })
  })

  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(3)

      expect(res)
        .toBe(9)
        .toBeA('number')
    })

    it('should async square a number', done => {
      utils.asyncSquare(3, res => {
        expect(res)
          .toBe(9)
          .toBeA('number')
        done()
      })
    })
  })
})

// some examples
// it('should expect some values', () => {
// expect(12).toNotBe(2)
// expect({ name: 'Marcel' }).toBe({ name: 'Marcel' }) // won't work
// expect({ name: 'Marcel' }).toEqual({ name: 'Marcel' }) // will work
// expect([2, 3, 4]).toInclude(3)
// expect([2, 3, 4]).toExclude(5)
// expect({
//   name: 'Marcel',
//   age: 27,
// }).toInclude({
//   age: 27,
// })
// expect({
//   name: 'Marcel',
//   age: 27,
// }).toExclude({
//   age: 25,
// })
// })

// should verify first and last names are set
// assert it includes firstName and lastName with proper values

it('should set firstName and lastName', () => {
  const user = {
    location: 'Dublin',
    age: 27,
  }
  const res = utils.setName(user, 'Marcel Cruz')

  expect(res).toInclude({
    firstName: 'Marcel',
    lastName: 'Cruz',
  })
})
