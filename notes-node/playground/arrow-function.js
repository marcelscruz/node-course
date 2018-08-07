const square = x => x * x
console.log(square(9))

this.name = 'Outer Marcel'

const user = {
  name: 'Inner Marcel',
  sayHi: () => {
    console.log(arguments) // doesn't work, prints global arguments
    console.log(`Hi. I'm ${this.name}.`) // outer name
  },
  sayHiAlt() {
    console.log(arguments) // works
    console.log(`Hi. I'm ${this.name}.`) // inner name
  },
}

user.sayHi(1, 2)
user.sayHiAlt(1, 2)
