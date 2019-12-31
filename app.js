//alert('Hello!');
// console.log(123);
// console.log("some string!");
// console.log(true);
// let a = "some variable";
// console.log(a);

// console.error("this is error!");
// console.warn("a warning!");
// console.table({'a':1,'b':2});
// console.time()
//     console.log("something!");
//     console.log("something!");
//     console.log("something!");
//     console.log("something!");
//     console.log("something!");
//     console.log("something!");
//     console.log("something!");
//     console.log("something!");
//     console.log("something!");
//     console.log("something!");
// console.timeEnd() // time for executing the script

// const name = 'some name';
// name = "some other name" // not posiible

// const person = {
//     name:"something",
//     age:30
// }

// person.name="something else"//possible
// person.age=45//possible

// person = { ///not possible
//     name:'somthing else',
//     age:56
// }
//****************STRINGS***********************//
// let firstName = 'GAURAV'
// let lastName = 'MISHRA'
// let str = "This is a sentence"
// //string methods
// console.log(firstName + " " + lastName);//concatenation
// console.log(firstName.charAt(0));
// console.log(firstName.indexOf('G'));
// console.log(firstName.toLowerCase);
// console.log(firstName.substring(0,2));
// console.log(firstName.slice(0,3),firstName.slice(-3));
// console.log(str.split(' '),str.split(','));
// console.log(str.includes('This'));
// console.log(str.replace('This','That'));

//template literal 

// let name='GAURAV'
// let age=24
// let job= "developer"

// function hello()
// {
//     return "hello";
// }

// let html = `<ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>${hello()}</li>
//     <li>${3+3}</li>
// </ul>`

// document.body.innerHTML = html;


// *************** Array *************

// let num = [1,2,3,4,5,6];
// let num1 = new Array(1,2,3,4,5);

// let mixed = [1,'somthing', undefined, true, {a:1,b:2}, new Date(), null]

// // console.log(mixed);

// // console.log(num.length)
// // num.push(7)//add to end
// // console.log(num);
// // num.pop(7) // delete from end
// // console.log(num);
// // num.unshift(0) // add to front
// // console.log(num);
// // num.shift(0) // delete from front
// // console.log(num);
// // num.splice(1,3)//splice
// // console.log(num);
// // num.reverse()
// // console.log(num);//to reverse   
// // console.log(Array.isArray(num));
// // console.log(num.indexOf(1));

// num.sort()//will only sort based on first digit
// console.log(num);

// num.sort(function(x,y){ //callback to sort in reverse
//     return y-x;
// })
// console.log(num);

// ****** Object Literals ****** 

// let person = {
//     name:'GAURAV',
//     age:24,
//     hobbies:['music','coding'],
//     address : {
//         city:'banglore',
//         state:'KA'
//     },
//     getBirthYear: function()
//     {
//         //return 1995;
//         return 2020 - this.age //(only age wont work)
//     }
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies[0],person.hobbies);
// console.log(person.address,person.address.city);
// console.log(person.getBirthYear());

// const today = new Date();

// console.log(today.getDate());
// console.log(today.getFullYear());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMilliseconds());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMonth());// gives month based on zero index    
// console.log(today.getTime());//timstamp 
// // can set also
// console.log(today.setDate(22));


// let name = 'GAURAV';

// console.log(`Hi ${name}, Welcome!!! `);


// ********default intialization for params in ES6

// function greet(firstname='Gaurav',lastname='Mishra'){
//     return firstname + ' ' + lastname;
// }

// console.log(greet());//Gaurav Mishra
// console.log(greet('GAURAV','MISHRA')) // GAURAV MISHRA

// *******function expressions

// const greet = function() {
//     console.log("hey user!");
// }
// greet();

// ********Imediate invokable function expressions

// (
//     function (name){
//         console.log(`hey ${name}!`);
//     }
// )('Gaurav')

// ***** Looping using map

// const users = [ // array of user objects
//     {id:1,name:'Gaurav'},
//     {id:2,name:'gaurav'}
// ]

// const ids = users.map(function(user){
//     return user.id
// })


// ids.forEach((id)=>{
//     console.log(users[id-1]);
// })

//**** window methods,objects,properties */
// window is global object 

//alert('hey!')

// const input = prompt()
// alert(input)

// if(confirm('Are you sure')){
//     console.log('OK')
// }
// else
// {
//     console.log('NOT OK')
// }

// outer hieght and width (size of window)

// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);

// console.log(window.scrollX);
// console.log(window.scrollY);

/** Location Object */

// console.log(window.location);
// console.log(window.location.hostname);
// console.log(window.location.protocol);
// console.log(window.location.port);
// console.log(window.location.href);
// console.log(window.location.search);

//redirect
//window.location.href = 'http://google.com'

//reload
// window.location.reload(); // will keep loading the page

console.log(window.navigator);