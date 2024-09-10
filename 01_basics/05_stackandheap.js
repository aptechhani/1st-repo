//stack(primitive) jab bhi koi value lete h to iska copy lete h 

//,heap(non-primitive) jab bhi koi value len gy to uska refrenmce
//  len gy chnge hony pe wo pora change hoga
//  jab k stack me aesa nhi hota stack me jab 
//  change karty h to duplicate change hota h 

// let myeyes = "navy blue"

// let eye = myeyes
//  eye= "hazel green"

// console.log (eye);
// console.log (myeyes);



let user = {
    email : "hanisarfraz126@gamil.com" ,
    name :  "hani"
}

let user2 = user

console.log(user2)

user2.email = "hanisarfraz127@gmail.com";
console.log (user.email);
console.log(user2.email);




