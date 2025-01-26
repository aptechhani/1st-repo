const user = {
    username : "hani" ,
    price : 234  ,
    welcomemessege : function()
    {
      console.log(`${this.username} , welcome to webiste`)
      console.log(this);
    }

}
user.welcomemessege()
console.log(this);


// this kwyword function me use nhi ota object m hota h

function chai()
{
    let username = "hani"
    console.log(this.username);
    
}
//  chai()



// arrow function 
 const add = (num1 , num2) => {
    return (num1 + num2)

}
console.log(add(2,7));


// {}use hoa to return likhna pry ga ()  sue hoa to warna nhi 
const addd = (num1 , num2) => (num1+num2)

console.log(addd(2,7));


// object me kse use key arrow function ko const addd = (num1 , num2) => (num1+num2)

const adddd = (num1 , num2) => ({username:"hani"})

console.log(adddd());
