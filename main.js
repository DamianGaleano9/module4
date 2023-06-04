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


// fullName = function(fName, lName) {
//     console.log(`${fName} ${lName}`);
// }

// fullName("Dami", "Mazo");


// helloWorld = () => {console.log("Hy Damian")}
// helloWorld()

// nameLower = (fName, lName) => {console.log(`${fName} ${lName}`.toUpperCase())};
// nameLower('Damian', 'Mazo')


// userInfo = (city, state, zip) => {

//     return (`${city} ${state} ${zip}`);
// };

// console.log(userInfo('Lehi', 'UT', 84043))

// userInfo = (city, state, zip) => {return (`${city} ${state} ${zip}`);}

// console.log(userInfo('Lehi', 'UT', 84043));


// const headingGenarator = (title, typeOfHeading) => {
//     return `
//         <h${typeOfHeading}>${title}</h${typeOfHeading}>
//      `
// }


// console.log(headingGenarator('Heading', 2))
// console.log(headingGenarator('Paragrahp', 1))


// function Invoice(subTotal) {
//     this.taxRate = 0.06;
//     this.subTotal = subTotal;


//     this.total = setInterval(() => {
//         console.log((this.taxRate * this.subTotal) + this.subTotal);
//     }, 2000);
// }

// const inv = new Invoice(200);
// console.log(inv);


// function SavingCalc(paycheck) {
//     this.percent = 0.30;
//     this.paycheck = paycheck;

//     this.deposit = () =>  {
//       return (this.percent * this.paycheck)
//     }
//   }

//   const piggyBank = new SavingCalc(2000);
//   console.log(piggyBank.deposit());

// let playerOne = 'Damian';
// let playerTwo = 'Ana';

// let tempPlayerOne = playerOne;
// let tempPplayerTwo = playerTwo;


// playerOne = tempPplayerTwo;
// playerTwo = tempPlayerOne;


// console.log(`
// player One: ${playerOne}
// player Two: ${playerTwo}

// `)



// function roadRage() {
//     let rightLane = "Chevy";
//     let leftLane = "Honda";

//     //Write your code here to make the cars switch lanes
//     [rightLane, leftLane] = [leftLane, rightLane];
//     return (`That ${rightLane} and ${leftLane} won't pick a lane`)
// }

// console.log(roadRage());


// function roadRage() {
//     let rightLane = "Chevy";
//     let leftLane = "Honda";

//     //Write your code here to make the cars switch lanes
//     [rightLane, leftLane] = [leftLane, rightLane]

//     return (`That ${rightLane} and ${leftLane} won't pick a lane`)
// }

// console.log(roadRage());

// #Destructuring


// const apiList = [
//     'https://api.dailysmarty.com/posts',
//     'https://api.github.com/users/jordanhudgens/repos',
//     'https://api.github.com/users/jordanhudgens'
// ]

// const [post, request, users] = apiList;
// console.log(post)
// console.log(request)
// console.log(users)


//Create and name your array list here 
// mix = ['Iced Coffee', 'Roses', 'Kiwi'];

// const [beverage, plant, fruit] = mix;
// console.log(beverage)
// console.log(plant)
// console.log(fruit)

// const bank = {
//     accountNum: 454812259,
//     name: 'John Doe',
//     balance: 1257
//   }

//   const bankInfo = ({accountNum, name, balance}) => {
//     return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
//   }


//   console.log(bankInfo(bank));




// const vapers = {
//   vaporesso: "Target 100",
//   smok: "Rpm80",
//   lostVape: "geek"
// };



// const  getVapers = ({vaporesso, smok, lostVape}) => {
//   return (`Top vapers for my is ${vaporesso} ${smok} ${lostVape}`);
// };


// console.log(vapers)

// const blog = {
//   title: 'My title',
// };


// const openGraphMetaData = ({title, summary = "My Default Title"}) => {
//   console.log(`
//     my Ti: ${title}
//     my Sm: ${summary}`);
// };

// console.log(openGraphMetaData(blog));


// const  user = {
//   username: 'Damian'
// };

// const loginEvent = ({username, status = 'active'}) => {
//   return `
//   your ${username}
//   is ${status}
//   `
// };

// console.log(loginEvent(user));

// const user = {
//   username: 'Damian',
//   status: 'away'
// };

// const loginEvent = (user) => {
//   user.status = 'active'
//   return (`
//   your ${user.username}
//   is ${user.status}
//   `);
// };

// console.log(loginEvent(user));



// const user = {
//   username: 'Damian',
//   status: 'away'
// }

// const loginEvent = (user) => {
//   user.status = 'active'
//   return (`${user.username} is ${user.status}`);
// };

// console.log(loginEvent(user));


// function yourTest() {
//   const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];

//   return (Math.max(...highscore));
// }

// console.log(yourTest());


// function numberMostBigger() {
//   const myArray= [1, 2, 3, 8, 99, 23];
//   return (Math.max(...myArray))
// };

// console.log(numberMostBigger())

// #Combining Arrays;


// let shoppingCart = [399, 32, 29, 9, 99];
// let newItems = [3, 6, 1999];

// shoppingCart.push(...newItems);
// console.log(shoppingCart)

// #Copyng Arrays;

// let shoppingCart = [399, 32, 29, 9, 99];
// // let updateShopping = (shoppingCart.slice()) //The Same Behavior 
// let updateShopping = [... shoppingCart];
// updateShopping.push(2);

// console.log(shoppingCart);
// console.log(updateShopping);

// const {starter, closer, ...relieves } = {
//     starter: 'Damian',
//     closer: 'Salva',
//     relief_1: 'Massi',
//     relief_2: 'Ana'
// }


// console.log(starter);
// console.log(closer);
// console.log(relieves);


// const userOne = {
//     firstName: 'Damian',
//     lastName: 'Galeano'
// };

// const userTwo = {
//     firstName: 'Salvador',
//     lastName: 'Galeano'
// };


// const fullname = function() {
//     return `${this.lastName} ${this.firstName}`;
// };

// const Damian = fullname.bind(userOne);
// const Salva = fullname.bind(userTwo);


// console.log(Damian())
// console.log(Salva())


// class Account {
//     constructor({ username, password }) {
//         this.username = 'username';
//         this.password = 'password';
//     }
// }

// const user = new Account({ username: 'Damian', password: 9999 });
// console.log(user);




// class Car {
// 	constructor({ year, brand, poweredBy = 'gas' }) {
// 		this.year = year;
// 		this.brand = brand;
// 		this.poweredBy = poweredBy;
// 	}

// 	carSpecs() {
// 		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
// 	}
// }

// const model3 = new Car({year: 2023, brand: 'Tesla', poweredBy: 'electricity'});
// model3


// class Instructor {
//     constructor({name, role = 'assistant'}) {
//         this.name = name;
//         this.role = role;
//     }

//     renderDetails() {
//         console.log(`${this.name}: ${this.role}`)
//     }


//     static helloWorld() {
//         console.log('Hi there');
//     }


// 	static canTeach(Instructor){
// 		return (Instructor.role === 'classroom');
// 	}
// }

// const damian = new Instructor({name: 'Damian Galeano', role: 'classroom'});
// const ana = new Instructor({name: 'Ana', role: 'Admin'});



// console.log(`
// 	${damian.name} can teach: ${Instructor.canTeach(damian)}`);


// console.log(`
// 	${ana.name} can Teach: ${Instructor.canTeach(ana)}`)



// class Home {
// 	constructor({ type, payment = "renting" }) {
// 		this.type = type;
// 		this.payment = payment;
// 	}

// 	static homeImprovement(yourHome) {
// 		return (yourHome.payment === 'mortgage')
// 	}
// }

// const choice1 = new Home({type: 'house', payment: 'mortgage'});
// const choice2 = new Home({type: 'apartment'});

// console.log(Home.homeImprovement(choice1));
// console.log(Home.homeImprovement(choice2));



// class Father {
// 	constructor({ name, age, color }) {
// 		this.name = name;
// 		this.age = age;
// 	};

// 	greetings() {
// 		return (`Hi ${this.name} you have ${this.age} old`);
// 	}

// 	static Loggin(Father) {
// 		return ('You wanna loggin');
// 	}

// };


// damian = new Father({ name: 'Damian', age: 35 });
// salvador = new Father({ name: 'Salvador', age: 5 });
// massimo = new Father({ name: 'Massimo', age: 1 });
// ana = new Father({ name: 'Ana', age: 29 });


// console.log(`
// ${damian.greetings()} maybe ${Father.Loggin()}
// `)

// console.log(`
// ${ana.greetings()} maybe ${Father.Loggin()}
// `)

// console.log(`
// ${massimo.greetings()} maybe ${Father.Loggin()}
// `)

// console.log(`
// ${salvador.greetings()} maybe ${Father.Loggin()}
// `)



// let sleepyGreeting = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello...')
//     }, 2000);

//     setTimeout(() => {
//         reject(Error('Too sleepy for me'))
//     }, 8000);
// });


// sleepyGreeting
//     .then(data => {
//         console.log(data);
//     })

//     .catch(err => {
//     console.error(err);
// });


// How to Group Promises Together with Promise.all in JavaScript

// const greeting = new Promise((resolve, rejeact) => {
//     resolve('Everything works');
//     rejeact('Oops something failure')
// });



// const updateAccount = new Promise((resolve, rejeact) => {
//     resolve('Update account');
//     rejeact('Error Acount');
// });

// const mixPromises = Promise.all([greeting, updateAccount]);

// mixPromises.then(res => {
//     res.forEach(activity => {
//         console.log(activity)
//     })
// });

// const user1 = () => {
//     return new Promise((resolve, rejeact) => {
//         setTimeout(() => {
//             resolve("I'm Here");
//         }, 2000);
//     })
// }

// const user2 = () => {
//     return new Promise((resolve, rejeact) => {
//         setTimeout(() => {
//             resolve("Another User here");
//         }, 2000);
//     })
// }

// async function users() {
//     const userUpdate = await user1();
//     console.log(userUpdate);
// };


// async function users2() {
//     const userUpdate2 = await user2();
//     console.log(userUpdate2);
// }   

// console.log(users());
// console.log(users2());



// const login = () => {
//     return new Promise((resolve, rejeact) => {
//         setTimeout(() => {
//             resolve('Logged');
//         }, 2000);
//     });
// }



// const updateLogged = () => {
//     return new Promise((resolve, rejeact) => {
//         setTimeout(() => {
//             resolve('Working');
//         }, 4000);
//     });
// }


// async function closureFunction(login, updateLogged) {
//     const closureLogging = await login;
//     console.log(closureLogging);

//     const closureupdate = await updateLogged;
//     console.log(closureupdate)
// };

// closureFunction(login(), updateLogged());




// https://api.dailysmarty.com/posts
// https://api.github.com/users/damiangaleano9/repos


// async function queryApis() {
//     const postPromises = fetch('https://api.dailysmarty.com/posts');
//     const post = await postPromises.then(res => res.json());
//     console.log(post);

//     const resposPromises = fetch('https://api.github.com/users/damiangaleano9/repos');
//     const repos = await resposPromises.then(res => res.json());
//     console.log(repos)

// };


// queryApis();


// async function queryApis() {
//     try {
//         const postPromises = fetch('https://api.dailysmarty.com/posts');
//         const post = await postPromises.then(res => res.json());
//         console.log(post);
//     } catch (err) {
//         console.log(err);
//         console.log('Problems Api Daily');

//     }
//     try {
//         const resposPromises = fetch('https://api.githu.com/users/damiangaleano9/repos');
//         const repos = await resposPromises.then(res => res.json());
//         console.log(repos)
//     } catch (err) {
//         console.log(err);
//         console.log('There was an error Github')
//     }
// };


// queryApis();

// randNumber = () => {
//     return Math.round(Math.random() * 9);
// }

// console.log(randNumber());
// console.log(randNumber());


// const sampleNumbers = _.times(3, randNumber);
// console.log(sampleNumbers);



// const players = [
//     { name: 'Bregman, A',  battingAverage: 0.284 },
//     { name: 'Altuve, J',   battingAverage: 0.346 },
//     { name: 'Springer, G', battingAverage: 0.283 },
//     { name: 'Gurriel, Y',  battingAverage: 0.299 },
//     { name: 'Gonzalez, M', battingAverage: 0.303 }
//   ];


// const myFilterFunction = _.filter(players, player =>  {
//     return player.battingAverage > 0.300;
// });

// const averagedown = _.filter(players , player => {
//     return player.battingAverage < 0.299;
// });

// console.log(myFilterFunction);
// console.log(averagedown)

// const randonm = _.times(2, myFilterFunction);
// console.log(randonm)


// const roster = [
//     { position: '3B', name: 'Bregman, A' },
//     { position: '2B', name: 'Altuve, J' },
//     { position: 'CF', name: 'Springer, G' },
//     { position: '1B', name: 'Gurriel, Y' },
//     { position: 'LF', name: 'Gonzalez, M' }
//   ]


//   const position = _.keyBy(roster, 'position');
//   console.log(position);



// function adminActions(func) {
// 	return func();
// }

// buttons = () => {
// 	return '<button>Admin Dashboard</button>';
// }

// try {
// 	console.log(adminActions(buttons));
// } catch(e) {
// 	console.log('No admin is logged in', e);
// }


// class SocialMediaError extends Error {
//     constructor(msg='An error ocurred', ...params) {
//         super(...params);
        
//         this.msg = msg
//     }
// }


// KBAY 


// const roster = [
//     { position: '3B', name: 'Bregman, A' },
//     { position: '2B', name: 'Altuve, J' },
//     { position: 'CF', name: 'Springer, G' },
//     { position: '1B', name: 'Gurriel, Y' },
//     { position: 'LF', name: 'Gonzalez, M' }
//   ]

//   const positions = _.keyBy(roster, 'position');

//   const secondBase = positions['2B'];
//   console.log(positions);
//   console.log(secondBase);

// Reduce

// const myReduce = _.reduce([1, 2, 3, 4], function(total, num) {
//     return total + num;
// }, 1000);


// console.log(myReduce)

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6, 7, 8],
//     [9, 10, 1, 2]
// ];


// const mychunk = _.chunk(arr, 6);
// console.log(mychunk);


// const homerunStats = [
//     { name: 'Bregman, A',  hr: 19 },
//     { name: 'Altuve, J',   hr: 24 },
//     { name: 'Springer, G', hr: 34 },
//     { name: 'Gurriel, Y',  hr: 18 },
//     { name: 'Gonzalez, M', hr: 23 }
//   ];

//   const homeRuns = _.reduce(homerunStats, function(total, player) {
//     return total + player.hr;
//   },0);


//   console.log(homeRuns);


//   const links = [
//     "https://google.com",
//     "https://devcamp.com",
//     "https://airbnb.com"
//   ];


//   const webLinks = _.reduce(links, function(content, link) {
//     debugger;
//     return `<a href=${link}>${link}</a><br>`.concat(content);
//   }, '');

//   console.log(webLinks);


//   randNumber = () => {
//     return _.random(1, 1000);
//   }

//   console.log(randNumber());


//   const lodasNumbers = _.times(2, randNumber);
//   console.log(lodasNumbers);


// function sum(num1, num2) {
//     return num1 + num2;
// }


// console.log(sum(2, 9));


