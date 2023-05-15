// var name = 'Damian'

// let user = "damian"
// var name = 'Massimo'


// console.log(name)
// console.log(user)


// var name, city, age, number;

// name = "damian"

// city = "bilbao"
// age = 35
// number = 9

// console.log(city)
// console.log(age)
// console.log(number)

// let age = 12;
// console.log(age)

// age = 35
// console.log(age)


// let age = 34

// var age = 9
// var age = 35
// console.log(age)

//Some comments


/*

another way of the comments

*/

//Boolean

// var truthy = true;
// var notruthy = false;

// console.log(truthy)
// console.log(notruthy)


// Null

// var nully = null
// console.log(nully)

// // Undefined

// var notDefined;
// console.log(notDefined)


// // String

// var name = "Damian"
// var nameTwo = "Damian Galeano"

// console.log(name)
// console.log(nameTwo)

// var user = {
//     name: 'Damian',
//     age: 35,
//     city: 'Bilbao',
//     grades: {
//         math: 90,
//         science: 100,
//         lenguageArts: 99
//     }
// }

// user.age = 18
// user.grades.music = 100
// user.grades.inglsh = 97
// console.log(user)
// console.log(typeof 12)
// console.log(typeof 'Astros')
// console.log(typeof true)
// console.log(typeof age)
// console.log(typeof age)


// var ageOne = 12
// String(ageOne)
// console.log(ageOne.toString())

// var ageTwo = "33"
// Number(ageTwo)
// console.log(ageTwo)



// console.log(parseInt(12, "estacion"))
// console.log(parseInt(1, 2, 2, 2))
// console.log(parseInt('33.5'))
// console.log(parseFloat("22.4"))
// console.log(Number('500') + Number(12))
// console.log(Number(true))
// console.log(Number(false))

// var str = "The quick brown fox jumped over the lazy dog"

// console.log(str.length)
// console.log(str.charAt(11))

// console.log(str.concat("run run run"))
// console.log(str.includes("quick"))
// console.log(str.startsWith("The quick"))
// console.log(str.endsWith("dog"))

// var str = "The quick brown fox jumped over the lazy dog"

// console.log(str.repeat(3))
// console.log(str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/));
// console.log('(555)555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/));

// console.log(str.replace('fox', 'cow'))
// console.log('555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/))
// console.log(str.indexOf('lazy'))


// var str2 = str.concat("and my yellow monkey and monkey")
// console.log(str2)
// console.log(str2.indexOf('monkey'))
// console.log(str2.lastIndexOf('monkey'))

// console.log(str2.charAt('45'))

// var str = "The quick brown fox jumped over the lazy dog"


// console.log(str.slice(10))
// console.log(str.slice(-19))
// console.log(str.slice(0, 9))
// var nameStrange = "    Damian    "
// console.log(nameStrange.trim())

// var str = "The quick brown fox jumped over the lazy dog"
// console.log(str.slice(4, 9))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// var gradeOne = 200
// var gradeTwo = 100

// var sum = 0;

// sum += gradeOne;
// sum += gradeTwo
// sum *= gradeOne

// console.log(sum);


// function mathTest() {
//     var sum = 0;

//     var lemons = 250;
//     var limes = 36;

//     var lemonade = lemons + limes;


//     sum += lemonade;

//     return sum
// }


// console.log(mathTest())


// var num = 5 +(5 * 10 ) / 6 **2 -1;
// console.log(num)

// var dataPoint = 9;


// switch (typeof dataPoint) {
//     case "string":
//         console.log("It's a string");
//         break;

//     case "number":
//         console.log("It's a number");
//         break;

//     case "BoLean":
//         console.log("It's a boolean");
//         break;

//     case "Float":
//         console.log("It's a float");
//         break;
//         default:
//            console.log("No Matches")

// }

// function ageVerification(age) {
// //     if(age > 19) {
// //         console.log("You can rent a car ");
// //     } else {
// //         console.log("Is not enough to rent a car ");
// //     }
// // }

// let answer = age > 19 ? "You can rent a car" : "Can'"
//  console.log(answer)


// }


// ageVerification(21)
// ageVerification(9)


// function adminControls(user) {
//     if(user) {
//         if(user.admin) {
//             return ("Showing admin controls");
//         } else {
//             return ("You need to be an admin");
//         }

//     } else {
//             return ("empty");
//         }
// }





// const userOne = {
//     name: "Damian",
//     admin: true
// };


// const userTwo = {
//     name: "Salvador",
//     admin: false
// }


// const userThree = {
//     name: "Ana",
//     admin: null
// }
// console.log(adminControls(userOne))
// console.log(adminControls(userTwo))
// console.log(adminControls(userThree))



// #Scope
// var userObje = {
//     email: "dj.damian.b",
//     fullName: "Damian Galeano"
// }


// function dashboardGreeting() {
//     var userObje = {
//         email: "sample@example.com",
//         fullName: "Massimo Galeano"
//     }
//     console.log("Hi There, ".concat(userObje.fullName))
// }


// console.log(userObje.fullName)


// const newName = "Damian";

// console.log(`Hy my name is ${newName}`);


// function movieLine() {
//     // Set your variable here
//     var scream = "It's a trap!"
//     return (`When they fell they knew it was a ${scream}`)
// }

// console.log(movieLine())


// function movieLine() {
//     // Set your variable here
//     var scream = "It's a trap!"
//     return (`When they fell they knew it was a ${scream}`)
// }


// console.log(movieLine())
//  const page = "Something";
//  console.log(`class= ${page === "Something" ? "Is truly" : "its false"}`)


// var ship = "hit";

// function battleShip() {
//     return(`boat= ${ship === "hit" ? "1 point" : "You loss a point"}`)
//   }


// console.log(battleShip())


// function fullName (fName, lName) {
//     console.log(`${fName} ${lName}`);
// }

// fullName('Damian', 'Galeano');


// Function Expression 


fullName = function(fName, lName) {
    console.log(`${fName} ${lName}`);
}

fullName("Dami", "Mazo");


