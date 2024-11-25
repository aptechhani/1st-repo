// objeect

const tinderuser = new Object()
const tinderuse = {}

 tinderuse.id = "123abc",
 tinderuse.name = "haya",
 tinderuse.isloggedin = "false"

// console.log(tinderuse);


// objects in objects 
const regularuser = {
    email : "haya@gmail.com",
    fullname:{
        userfullname: {
            firstname:"haya", 
            lastname :"sulaiman"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);


//object combine 

const myob1 = {
    1 :"a",
    2 :"b",
}
const myob2 = {
    3 :"c",
    4 :"d",
}
// const myob3 = {myob1,myob2}
const myob3 = Object.assign(myob1,myob2)
console.log(myob3);

const myob4 ={...myob1, ...myob2}
// console.log(myob4);

// agar array k andar k object ki keys chahie ho

// console.log(Object.keys(tinderuse));
// console.log(Object.values(tinderuse));
// console.log(Object.entries(tinderuse));


// question 


console.log(tinderuse.hasOwnProperty("name"));


const course ={
   coursename : "chai or code ",
   price : 1000,
   courseteacher : " hitesh sir "
}

// console.log(course.price);

const {price} = course

console.log(price);


// ye pta nhi kia tha 
// const navbar = ({company}) => {

// }
// navbar(company = "hani")

// api 
// {
//     name :"hani",
//     course : "js",
//     price :"free,"
// }

[
    {},
    {},
]