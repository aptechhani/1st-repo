 const mynums = [1,5,3,4,5,6,7]
// const newnums = mynums.reduce( function (acc , currval) {
//     console.log(` acc: ${acc} currval:  ${currval}`)
//  return acc + currval
// } ,0)
// console.log(newnums)

// second 

// const newums = mynums.reduce( ( acc, currval) => acc + currval,0)

// console.log( newums)


 // shopping cart 

 const shoppingcart = [
    {
        items : " bag",
        price : 1000
    },
    {
        items : " heels",
        price : 6000
    },
    {
        items : " glasses",
        price : 1000
    },
    {
        items : "clothes",
        price : 14000
    },
 ]
  const mycard = shoppingcart.reduce( (acc, items) =>  items.price + acc , 0)
  console.log(mycard)