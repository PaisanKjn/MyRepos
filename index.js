//const datefns = require('date-fns');

//console.log(datefns.format(new Date(), "MM/dd/yyyy")) //To use NPM, install npm > require

//console.log("Hello World!!!!!");

let firstName = "Paisan"
let age = 16

//console.log(firstName + age)

// let info = `
//     My name is ${firstName}
//     My age is ${age}
// `
// console.log(info)

const user = {
    name: "Paisan",
    salary: 250000,
    address: {
        province: "Chonburi",
        postcode: 20140
    
    }

}
// console.log(user.salary)
// console.log(user.address.postcode)

const showData = () => `${user.name}`
// console.log(showData())

const showData2 = () => {
    let info = 'My name is'
    return `${info} ${user.name}`
}
// console.log(showData2())

const sumNumber = (a,b) => a+b;
// console.log(sumNumber(12,3))

const {name, salary, address: {postcode}} = user; //note that nested obj still needs a parenthesis
console.log(postcode)