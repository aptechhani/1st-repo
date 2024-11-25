// objects
// singleton 
//  object.create lekin hmy ye nhi karna 

// object literals 


// declare object
const jsuser = {
    name:"ummehanii", "fullname":"ummehani sarfraz",
    age :"18",
    location :"karachi",
    email:"hanisarfraz126@gmail.com",
    isloggedin: false,
    lastloggindays:["Monday" ,"Tuesday"],
}
// access object
//first
console.log(jsuser.age);
//second
console.log(jsuser["age"]);


console.log(jsuser["fullname"]);

// to declare symbol

const mysym = Symbol("hello")
const user = {
    [mysym] : "mykeys1",
    age :"18",
    location :"karachi",
    email:"hanisarfraz126@gmail.com",
    isloggedin: false,
    lastloggindays:["Monday" ,"Tuesday"],
}
// console.log(user[mysym]);



// to chnagevalue of object

user.email = "aptechhani@gmail.com";
// console.log(user.email);

// to object freeze

Object.freeze(user);
user.email = "aptech12hani@gmail.com";
// console.log(user);


// to  greeting
// this grett method notr work 

 user.greeting = function () {
    console.log("hello");
    
 }
 user.greeting2 = function () {
    console.log(`hello,${this.name}`);
 }
 console.log(user.greeting);
 console.log(user.greeting2);