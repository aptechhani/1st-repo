// arrays more function 



 const fruits = ["mango" , "banana", "pineapple"];
 const veg  =["pappaya" , "potato" , "peas"];
 
 fruits.concat(veg);
//  console.log(fruits);
// //  console.log(fruits[3][1]); 
 


//concate 
const frveg = fruits.concat(veg);
 console.log(frveg);

//  spread

const frwe = [...fruits,...veg]
console.log(frwe);


//flat
const anotherArr = [1,2,3,[4,5,6,],7,[6,7,,[4,5]]]
const realArr = anotherArr.flat(Infinity);
console.log(realArr);

//is array 
console.log(Array.isArray("ummehani"));


//  from
console.log(Array.from("ummehani"));


console.log(Array.from({name:"ummehani"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;
  
console.log(Array.of(score1,score2,score3));
