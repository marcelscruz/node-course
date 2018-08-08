const getUser = (id, callback) => {
  // user would come from db
  const user = {
    id: id,
    name: 'Marcel',
  }

  // callback would be called after user is fetched
  setTimeout(() => {
    callback(user)
  }, 3000)
}

getUser(31, userObject => {
  console.log(userObject)
})
