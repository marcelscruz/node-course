const expect = require('expect')
const rewire = require('rewire')

// imports app but adds two methods, set and get
const app = rewire('./app')
// app.__get__
// app.__set__

describe('App', () => {
  const db = {
    saveUser: expect.createSpy(),
  }
  // substitutes original function for fake one
  app.__set__('db', db)

  it('should call the spy correctly', () => {
    const spy = expect.createSpy()
    spy('Marcel', 27)
    expect(spy).toHaveBeenCalledWith('Marcel', 27)
  })

  it('should call saveUser with user object', () => {
    const email = 'marcel@example.com'
    const password = '123abc'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({ email, password })
  })
})
