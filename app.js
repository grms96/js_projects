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

//console.log(window.navigator);

/// ************* Ibject Oriented Features in jS *********//
// const gaurav = {
//     name:"Gaurav",
//     age:25
// }
// console.log(gaurav,gaurav.name,gaurav.age);

// function Person(name,dob) {
//     this.name = name,
//     //this.age = age
//     this.birthday = new Date(dob);
//     this.getAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear()-1970);
//     }
// }
// //console.log(this)// global scope points to window object
// const gaurav = new Person("Gaurav",25);
// const other = new Person("Other",30);
// const newPerson = new Person("someone","1996-05-23");
// //console.log(gaurav,other);
// console.log(newPerson.getAge());

//prototypes are used to manipulate object and access object instead of writing all the function inside object

// function Person(firstName,lastName){
//     this.firstName = firstName,
//     this.lastName = lastName
// }

// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person("Gaurav","Mishra");
// console.log(person1.greeting());

//prototypes can be inherited

// ********** ES6 for creating objects ***********//

// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName
//     }

//     greetings(){
//         return `Hello ${this.firstName} ${this.lastName}`
//     }
// }

// const gaurav = new Person("Gaurav","Mishra");

// console.log(gaurav);

//console.log(gaurav.greetings());


// can define statics method and static methods can be accessed usging class name

// Inheritance ***********//

// class Person {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     grretings(){
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }
// }

// class Customer extends Person{
//     constructor(firstName,lastName,phone){
//         super(firstName,lastName);
//         this.phone = phone;
//     }
//     static addNUmber(x,y){
//         return x+y;
//         }
// }

// const gaurav = new Customer("GAURAV","MISHRA","9841215454112")

// //console.log(gaurav);
// console.log(gaurav.grretings())
// console.log(Customer.addNUmber(1,2));

/// *************** Asybchronous Programming **********//

//Blocking code Or Synchronous//

// function loadfn(){

// }

// loadfn()// blocking the code untill function is not executed

// /* AJAX

// Asynchronous js & XML


// */

// // callback functions ===> functions that can be passed into a function and can be called from there

// const posts = [
//     {title:'post1',body:"This is post1"},
//     {title:'post2',body:"This is post2"}
// ]

// function newPost(post,callback){
// setTimeout(function(){
//     posts.push(post);
//     callback();
// },2000)
// }

// function getPosts(){
//     setTimeout(function(){
//         let output= '';
//         posts.forEach(post=>{
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000)
// }

// newPost({title:'post3',body:"This is post3"},getPosts);


// *************promises************

// const posts = [
//     {title:'post1',body:"This is post1"},
//     {title:'post2',body:"This is post2"}
// ]

// function newPost(post){
// return new Promise((resolve,reject)=>{
//     //resolve(posts.push(post));
//     reject(new Error);
// })
// }

// function getPosts(){
//     setTimeout(function(){
//         let output= '';
//         posts.forEach(post=>{
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000)
// }

// newPost({title:'post3',body:"This is post3"}).then(getPosts)
// .catch(err=>{
//     console.log(err);
// });

// **** arrow functions ******//



// let users = ['Gaurav','Saurabh', 'Vaibhav'];

// const getLength = users.map((user)=>{
//     return user.length;
// });

// console.log(getLength);

// ******** asunc await *******//

// const sayHello = async () =>{
//     return 'Hello';
// }

// sayHello()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// async makes normal functions to return a promise

//wrting fetch fn wit async await

// const getUsers = async () =>{
    
//     // await response of fetch call
//     const res = await fetch('https://api.github.com/users');
    
//     //wait unctill its resolved
//     const data = await res.json();

//     //wait untill second promise is resolved
//     return data;
// }

// getUsers()
//     .then(users=>{
//         users.map((user)=>{
//             console.log(user.login);
//         })
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// Error handling ********


// try {
//     helloFn();
// } catch (error) {
//     console.log(error);
//     console.log(error.message);
// } finally {
//     console.log("Always runs no matter what!");
// }

// console.log("After try Catch");

// let user = { name : 'Gaurav',email : 'misra.gaurav789@gmail.com'}

// try {
//     if(!user.name)
//         throw new Error('User name not defined');
//     else
//         console.log(user.name)
// } catch (error) {
//     console.log(error);
//     console.log(error.message);
// }

// ********** regular expresssions

// let re = /hello/;
// console.log(re) // return regular expression ==> /hello/
//console.log(re.source); // returns source ==> hello

//console.log(re.exec('hello world')); // gets the index of first match
// let re = /Hello/i ===>ignore case
//  let re = /hello/g //===> searchches globally
// // const result = re.test('hello');
// // console.log(result); //true

// let somestring = "hello there hello"
// const result = somestring.search(re);
// console.log(result)

// Meta charachter

//re = /^h/i;//starting with h
//re = /World$/i ===> ends with world or World
//re = /^hello$/i// ==> bigin and end with hello
//re = /h.llo/i // exactly one character between h and l
//re = /h*llo/i //any no of charachters between h and l
// re = /he?lo/i // optional one char in between e and l

// re = /he[ab]o/ // must be and a or b
// re = /he[^ab]o/ // not a or b
// re = /[A-Za-z0-9]llo/ //any od A-z or a-z or 0-9 ANY NO OF CHARS
// re = /HEL{2}O/i // exactly two l's

// paranthesis grouping

// re = /^([0-9]x){3}$/ // patter like 3x3x3x

// //shorthand chars
// re = /\w/ // word chars - alphanumeric or _
// re = /\w+/; // one or more
// re = /\W/; //non word chars
// re = /\d/ //match any digit 
// re = /\d+/ // one or more
// re = /\D/ // non digit 
// re = /\s/ // whitespace char


// const str = '3x3x3x';



// //console.log(re.test(str));
// console.log(re.test(str));



// **** iterators and genrators **** ////

// *** symbols **** //

// **** Destructutring *** //
// let a,b;
// [a,b] = [10,20];

// console.log(a,b)

// // map ***********
// // maps are key avalue pair can use any type as a key or a value

// const map1 = new Map();

// const key1 = 'Some Srting'
// const key2 = {},
// key3 = function() {};

// // set map value by key

// map1.set(key1, "Value of key1");
// map1.set(key2, "Value of key2");
// map1.set(key3, "Value of key3");

// //get values of key
// // console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// // // count values
// // console.log(map1.size);

// // itrating maps

// map1.forEach((key,value) => {
//     console.log(key,value);
// });

// ******* set stores unique values of any type *****//

// const set1 = new Set();

// set1.add(100);
// set1.add('A string');
// set1.add(10);
// set1.add(true)
// set1.add(null)
// set1.add(undefined)
// set1.add({name:'gaurav'})


// console.log(set1);

// //count

// console.log(set1.size);
// //check for values
// console.log(set1.has(10));
// console.log(set1.has(5+5));

// // delete 
// set1.add(100)
// console.log(set1)
// set1.delete(100);
// console.log(set1);

// Javascript design patterns*******


// module and revaling module patterns

// iffi

// (function(){

//     //Declare private vars and functions

//     return {

//     }

// })();

// standard module pattern
// const Uictrl = (function(){
//     let text = 'Hellow World';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text; 
//     }

//     // returned things can be accesed from outside
//     return {
//         callChangeText : function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// Uictrl.callChangeText();


// revealing module pattern
// const ItemCtrl = (function(){
//     let data = [];

//     function add(item){
//         data.push(item);
//         console.log('Item added...');
//     }

//     function get(id) {
//         return data.find(item => {
//             return item.id === id;
//         });
//     }

//     return {
//         add : add,
//         get : get
//     }
// })();

// ItemCtrl.add({id:1,name:"Gaurav"});
// console.log(ItemCtrl.get(1));


// Singleton pattern
// const singleton = (function(){

//     let instance;

//     function createInstance() {
//         const object = new Object({name:'Gaurav'});
//         return object;
//     }

//     return {
//         getInstance : function(){
//             if(!instance){
//                 createInstance();
//             }
//             return instance;
//         }
//     }

// })();
// const instanceA = singleton.getInstance();
// const instanceB = singleton.getInstance();

// console.log(instanceA === instanceB); // singleton pattern only allows to create one instance

// ****** factory pattern *****// used to create multiple objects

// observer pattern used to notify certain events

// mediator pattern ex chat room

// state pattern